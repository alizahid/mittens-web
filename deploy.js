const { FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env

const LOCAL_PATH = '/public'
const LAST_DEPLOY = '.last_deploy'

const difference = require('lodash.difference')
const fs = require('mz/fs')
const FtpDeploy = require('ftp-deploy')
const glob = require('glob')

const ftp = new FtpDeploy()

const config = {
  host: FTP_HOST,
  localRoot: __dirname + LOCAL_PATH,
  password: FTP_PASSWORD,
  port: 21,
  remoteRoot: '/',
  user: FTP_USER
}

const lastDeployed = async () => {
  const exists = await fs.exists(LAST_DEPLOY)

  if (!exists) {
    await fs.writeFile(LAST_DEPLOY, '0', 'utf8')
  }

  const time = await fs.readFile(LAST_DEPLOY, 'utf8')

  return time.trim()
}

const find = path => {
  return new Promise((resolve, reject) => {
    glob(path, (err, files) => {
      if (err) {
        return reject()
      }

      resolve(files)
    })
  })
}

const includedFiles = async (files, time) => {
  const eligible = []

  for (file of files) {
    if (await updatedAfter(file, time)) {
      eligible.push(file)
    }
  }

  return eligible.map(file => file.substr(LOCAL_PATH.length))
}

const updatedAfter = async (path, time) => {
  const file = await fs.stat(path)

  return file.isFile() && file.mtime > time
}

const updateLastDeployment = () => fs.writeFile(LAST_DEPLOY, Date.now(), 'utf8')

const run = async () => {
  const time = await lastDeployed()

  const files = await find('public/**/*.*')

  config.include = await includedFiles(files, time)

  ftp.deploy(config, async err => {
    if (err) {
      throw err
    }

    await updateLastDeployment()

    console.log('Deployed!')
  })

  ftp.on('uploaded', ({ totalFileCount, transferredFileCount, filename }) =>
    console.log(
      `${transferredFileCount}/${totalFileCount}`,
      '\t',
      filename,
      'uploaded'
    )
  )
}

run()
