import React, { Component } from 'react'

import ReactGA from 'react-ga'
import {
  Carousel,
  Tabs,
  Tab

} from 'react-materialize'

import { SKILLS, INFO } from '../constant'
const { profession } = INFO

const handleEvent = carousel => {
  M.Carousel.init(carousel).destroy()
  setTimeout(() => M.Carousel.init(carousel).next(2), 0)
}

const onChange = () => document
  .querySelectorAll('.carousel')
  .forEach(handleEvent)

const handleClick = () => {
  const label = document?.querySelectorAll('#skills li.tab a.active')[0]?.innerHTML
  ReactGA.event({
    category: 'Skill',
    action: 'Click',
    label
  })
  onChange()
}

const Title = () =>
  <div className="typing">
    <h4>{ profession }<div className="cursor"></div></h4>
  </div>

const TabSkills = () =>
  <Tabs onChange={ handleClick }>{ Object.entries(SKILLS).map(([skill, skills], index) =>
    <Tab key={ index } title={ skill }>
      <Carousel className="carousel" carouselId={`Carousel-${index}`} images={ skills }/>
    </Tab>
  )}</Tabs>

const Content = () =>
  <div className="middle">
    <Title/>
    <TabSkills/>
  </div>

class Skill extends Component {
    state = {
      isOnPage: false
    };

    static getDerivedStateFromProps (props, state) {
      return (props?.state?.destination?.index === 1 && !state?.isOnPage)
        ? { isOnPage: true }
        : null
    }

    componentDidUpdate () {
      if (this.props?.state?.destination?.index === 1 && this.state?.isOnPage) {
        setTimeout(onChange, 250)
      }
    }

    render () {
      return (
        <div id="skills" className="section">
          { this.state.isOnPage ? <Content/> : '' }
        </div>
      )
    }
}

export default Skill
