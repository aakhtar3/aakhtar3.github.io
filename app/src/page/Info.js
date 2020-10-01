import React from 'react'

import { default as Particles } from 'particles-bg'

import { INFO } from '../constant'
const { name, summary } = INFO

const Name = () => <h1 className="green-text-color">{ name }</h1>

const Summary = () => <h4 className="white-text">{ summary }</h4>

const Scroll = () =>
  <div className="pulse">
    <i className="white-text fas fa-mouse fa-2x"></i>
    <br/>
    <i className="white-text fas fa-angle-down fa-2x"></i>
  </div>

const Info = () =>
  <div id="info" className="section">
    <Name/>
    <Summary/>
    <Scroll/>
    <Particles color="random" type="lines" bg={ true }/>
  </div>

export default Info
