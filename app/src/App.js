import React, { Component } from 'react'

import ReactGA from 'react-ga'
import { default as FullPage } from '@fullpage/react-fullpage'

import {
  Info,
  Skill,
  // Photography,
  Contact
} from './page'
const { Wrapper: Page } = FullPage

const trackingId = 'UA-165370887-1'
const key = ''

const handleOnLeave = (_, destination) => {
  const label = destination.item.id
  ReactGA.pageview(label)
  ReactGA.event({
    category: 'Page',
    action: 'Scroll',
    label
  })
}

const Pages = ({ state }) =>
  <Page>
    <Info/>
    <Skill state={ state }/>
    {/* <Photography state={ state }/> */}
    <Contact state={ state }/>
  </Page>

class App extends Component {
  componentDidMount () {
    ReactGA.initialize(trackingId)
    ReactGA.set({ page: 'info' })
    ReactGA.event({
      category: 'Page',
      action: 'Scroll',
      label: 'info'
    })
    const elem = document.getElementById('loader')
    elem.parentNode.removeChild(elem)
  }

  render () {
    return (
      <FullPage
        licenseKey={ key }
        onLeave={ handleOnLeave }
        render={ Pages }
      />
    )
  }
}

export default App
