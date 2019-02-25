import React, { Component } from 'react'

import heart from './assets/heart.svg'
import mittens from './assets/mittens.svg'

import './mittens.scss'

export default class Mittens extends Component {
  render() {
    return (
      <main>
        <header>
          <img src={mittens} alt="mittens" />
          <h1>mittens</h1>
          <p>
            brings you push notifications
            <br />
            from GitHub
          </p>
        </header>
        <section>
          <a href="https://itunes.apple.com/us/app/mittens/id1453383568?mt=8">download on App Store</a>
        </section>
        <footer>
          <p>
            made with&#160;
            <img src={heart} alt="love" />
            &#160;by&#160;
            <a href="https://designplox.com">ali zahid</a>
          </p>
        </footer>
      </main>
    )
  }
}
