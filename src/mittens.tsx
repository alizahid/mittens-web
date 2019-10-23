import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import {
  img_heart,
  img_mittens,
  screenshot_dark,
  screenshot_light
} from './assets'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4em 0;
  min-height: 100vh;
  text-align: center;
`

const Header = styled.header`
  margin-bottom: 1em;

  img {
    height: calc(170px / 2);
    width: calc(200px / 2);
  }

  p {
    margin-bottom: 0;
  }
`

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em 0;

  a {
    align-items: center;
    background: #5dc3c4;
    border-radius: 2em;
    color: #fff;
    display: flex;
    font-weight: 500;
    margin: 1em;
    padding: 1em 1.5em;

    &:hover {
      background: darken(#5dc3c4, 10%);
      color: #fff;
    }
  }

  figure {
    border-radius: 0.25em;
    margin: 1em;
    overflow: hidden;

    img {
      width: 20em;
    }
  }
`

const Footer = styled.footer`
  margin-top: 1em;

  p {
    color: #999;
    margin: 0;

    img {
      height: 1.4em;
    }
  }
`

export const Mittens: FunctionComponent = () => {
  return (
    <Main>
      <Header>
        <img src={img_mittens} alt="mittens" />
        <h1>mittens</h1>
        <p>
          brings you push notifications
          <br />
          from GitHub
        </p>
      </Header>
      <Content>
        <a href="https://itunes.apple.com/us/app/mittens/id1453383568?mt=8">
          App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=app.mittens">
          Google Play
        </a>
        <a href="https://github.com/mittens">GitHub</a>
      </Content>
      <Content>
        <figure>
          <img src={screenshot_light} alt="Mittens light" />
        </figure>
        <figure>
          <img src={screenshot_dark} alt="Mittens dark" />
        </figure>
      </Content>
      <Footer>
        <p>
          made with&#160;
          <img src={img_heart} alt="love" />
          &#160;by&#160;
          <a href="https://alizahid.dev">ali zahid</a>
        </p>
      </Footer>
    </Main>
  )
}
