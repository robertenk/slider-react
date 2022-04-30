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

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    const sliderWidth = this.sliderElem.current ? this.sliderElem.current.offsetWidth : 0

    this.setState({
      sliderWidth
    })
  }

  getSlideTrackStyle() {
    const { items } = this.props
    const { sliderWidth, currentSlideIndex } = this.state

    const trackWidth = items.length * sliderWidth
    const offset = currentSlideIndex * sliderWidth

    return {
      width: `${trackWidth}px`,
      transform: `translate3d(-${offset}px, 0px, 0px)`
    }
  }

  showPrev() {
    if (this.state.currentSlideIndex === 0) return

    this.setState(previousState => ({
      currentSlideIndex: previousState.currentSlideIndex - 1
    }))
  }

  showNext() {
    if (this.state.currentSlideIndex === this.props.items.length - 1) return

    this.setState(previousState => ({
      currentSlideIndex: previousState.currentSlideIndex + 1
    }))
  }

  render() {
    const slides = this.props.items.map((item, index) => (
      <Slide
        key={item.id}
        title={item.title}
        src={item.src}
        width={this.state.sliderWidth}
        isActive={this.state.currentSlideIndex === index}
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
          <button
            type="button"
            id="btn-prev"
            className={`btn btn-prev ${this.state.currentSlideIndex === 0 ? 'inactive' : ''}`}
            onClick={this.showPrev}
          >
            <GrPrevious />
          </button>
          <button
            type="button"
            id="btn-next"
            className={`btn btn-next ${
              this.state.currentSlideIndex === this.props.items.length - 1 ? 'inactive' : ''
            }`}
            onClick={this.showNext}
          >
            <GrNext />
          </button>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      title: PropTypes.string
    })
  )
}

export default Slider
