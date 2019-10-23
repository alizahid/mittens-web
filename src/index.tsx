import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { Mittens } from './mittens'
import { register } from './serviceWorker'

ReactDOM.render(<Mittens />, document.getElementById('root'))

register()
