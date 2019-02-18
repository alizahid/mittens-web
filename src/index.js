import React from 'react'
import ReactDOM from 'react-dom'

import Mittens from './mittens'

import { unregister } from './serviceWorker'

import './index.scss'

ReactDOM.render(<Mittens />, document.getElementById('root'))

unregister()
