import React from 'react'
import PropTypes from 'prop-types'
import { GrNext, GrPrevious } from 'react-icons/gr'
import Slide from './slide'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = { currentSlideIndex: 0, sliderWidth: 0 }

    this.showPrev = this.showPrev.bind(this)
    this.showNext = this.showNext.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.sliderElem = React.createRef()
  }

  showPrev() {
    if (this.state.currentSlideIndex === 0) return

    this.setState({
      currentSlideIndex: this.state.currentSlideIndex - 1
    })
  }

  showNext() {
    if (this.state.currentSlideIndex === this.props.items.length - 1) return

    this.setState({
      currentSlideIndex: this.state.currentSlideIndex + 1
    })
  }

  getSlideTrackStyle() {
    const trackWidth = this.props.items.length * this.state.sliderWidth
    const offset = this.state.currentSlideIndex * this.state.sliderWidth

    return {
      width: `${trackWidth}px`,
      transform: `translate3d(-${offset}px, 0px, 0px)`
    }
  }

  handleResize() {
    const sliderWidth = this.sliderElem.current ? this.sliderElem.current.offsetWidth : 0

    this.setState({
      sliderWidth
    })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const slides = this.props.items.map((item, index) => (
      <Slide
        key={index}
        className={`slide ${item.color}`}
        title={item.title}
        src={item.src}
        width={this.state.sliderWidth}
      />
    ))

    return (
      <div className="app-slider" ref={this.sliderElem}>
        <h1>{this.props.title}</h1>

        <div className="slider">
          <div className="slider-track" style={this.getSlideTrackStyle()}>
            {slides}
          </div>
        </div>

        <div className="controls">
          <div
            className={`btn btn-prev ${this.state.currentSlideIndex === 0 ? 'inactive' : ''}`}
            onClick={this.showPrev}
          >
            <GrPrevious />
          </div>
          <div
            className={`btn btn-next ${
              this.state.currentSlideIndex === this.props.items.length - 1 ? 'inactive' : ''
            }`}
            onClick={this.showNext}
          >
            <GrNext />
          </div>
        </div>
      </div>
    )
  }
}

Slider.defaultProps = {
  title: 'slider-react',
  items: []
}

Slider.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default Slider
