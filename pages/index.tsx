import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>mittens brings you push notifications from GitHub</title>
    </Head>

    <header className="flex flex-col items-center justify-center my-20">
      <img alt="mittens" className="h-20" src="/mittens.svg" />
      <h1 className="text-secondary font-medium text-3xl mt-4 mb-2">mittens</h1>
      <p className="text-center">
        brings you push notifications
        <br />
        from GitHub
      </p>
    </header>

    <main>
      <section className="flex justify-center flex-wrap -mt-16">
        <a
          className="bg-secondary text-white font-medium rounded-full px-4 py-3 m-4"
          href="https://itunes.apple.com/us/app/mittens/id1453383568?mt=8">
          App Store
        </a>
        <a
          className="bg-secondary text-white font-medium rounded-full px-4 py-3 m-4"
          href="https://play.google.com/store/apps/details?id=app.mittens">
          Google Play
        </a>
        <a
          className="bg-secondary text-white font-medium rounded-full px-4 py-3 m-4"
          href="https://github.com/mittens">
          GitHub
        </a>
      </section>
      <section className="mt-20 flex flex-col lg:flex-row justify-center">
        <figure className="rounded-lg overflow-hidden">
          <img
            alt="Mittens light"
            className="w-full lg:w-screenshot"
            src="/light.png"
          />
        </figure>
        <figure className="rounded-lg overflow-hidden mt-8 lg:mt-0 lg:ml-8">
          <img
            alt="Mittens dark"
            className="w-full lg:w-screenshot"
            src="dark.png"
          />
        </figure>
      </section>
    </main>

    <footer className="flex items-center justify-center my-20 text-gray-500">
      made with
      <img alt="love" className="h-6 w-6 mx-1" src="/heart.svg" />
      by
      <a className="ml-1" href="https://alizahid.dev">
        ali zahid
      </a>
    </footer>
  </>
)

export default Home
