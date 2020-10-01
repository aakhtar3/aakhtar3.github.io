import React, { Component } from 'react'

import ReactGA from 'react-ga'
import {
  Slider,
  Slide,
  Caption
} from 'react-materialize'

import { PHOTOGRAPHY } from '../constant'

const options = {
  interval: 2000
}

const Slides = () =>
  <Slider fullscreen={ true } options={ options }>{ PHOTOGRAPHY.map(({ path, content, color, placement }, index) =>
    <Slide key={ index } className="" image={<img alt={ content } src={ path }/>}>
      <Caption placement={ placement} className={ color }>
        <h3>{ content }</h3>
      </Caption>
    </Slide>
  )}</Slider>

class Photography extends Component {
    state = {
      isOnPage: false
    };

    static getDerivedStateFromProps (props, state) {
      return (props?.state?.destination?.index === 2 && !state?.isOnPage)
        ? { isOnPage: true }
        : null
    }

    render () {
      return (
        <div id="photography" className="section">
          { this.state.isOnPage ? <Slides/> : '' }
        </div>
      )
    }
}

export default Photography
