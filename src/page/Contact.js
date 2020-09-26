import React, { Component } from 'react'

import ReactGA from 'react-ga'
import { Animated } from 'react-animated-css'

import { CONTACT, INFO } from '../constant'
const { resume } = INFO
const { email } = INFO

const handleClick = (label) => ReactGA.event({
  category: 'Social',
  action: 'Click',
  label
})

const Divider = () =>
  <Animated animationInDelay={ 2000 } animationIn="fadeIn" animationInDuration={ 1000 }>
    <span className="divider center"></span>
  </Animated>

const Resume = () =>
  <Animated animationInDelay={ 1000 } animationIn="fadeInDown" animationInDuration={ 1500 }>
    <h4><a className="white-text" href={ resume } target="_blank" onClick={ handleClick.bind(null, 'Resume') }>Resume</a></h4>
  </Animated>

const Email = () =>
  <Animated animationInDelay={ 500 } animationIn="bounceIn" animationOut="rotateOutUpLeft" animationInDuration={ 1500 }>
    <a href={ `mailto:${email}` } onClick={ handleClick.bind(null, 'Email') }>
      <span className="fa-stack fa-3x">
        <i className="white-text fa-stack-2x fas fa-comment"></i>
        <small className="fa-stack-1x fa-stack-text">
          <span className="green-text-color">Email</span>
        </small>
      </span>
    </a>
  </Animated>

const Social = () =>
  <Animated animationInDelay={ 1000 } animationIn="fadeInUp" animationInDuration={ 1500 }>
    <ul>{ CONTACT.map(({ media, path, icon }, index) =>
      <a key={ index } className="white-text" href={ path } target="_blank" onClick={ handleClick.bind(null, media) }>
        <i className={`icon ${icon}  fa-2x`}></i>
      </a>
    )}</ul>
  </Animated>

const Footer = () =>
  <Animated animationInDelay={ 2000 } animationIn="fadeIn" animationInDuration={ 1000 }>
    <small>
      <span className="white-text dark-outline">{ new Date().getFullYear() }</span>
            &nbsp;
      <a className="green-text-color" href="" onClick={ handleClick.bind(null, 'Home') }>A2Z</a>
    </small>
  </Animated>

class Contact extends Component {
    state = {
      display: 'none'
    };

    static getDerivedStateFromProps (props, state) {
      return (props?.state?.destination?.index === 2 && state?.display === 'none')
        ? { display: 'block' }
        : null
    }

    render () {
      return (
        <div id="contact" className="section">
          <div style={ this.state }>
            <Resume/>
            <Divider/>
            <Email/>
            <Divider/>
            <Social/>
            <Footer/>
          </div>
        </div>
      )
    }
}

export default Contact
