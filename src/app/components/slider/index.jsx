import React from 'react'
import PropTypes from 'prop-types'
import { GrNext, GrPrevious } from 'react-icons/gr'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = { currentSlideIndex: 0 }
    this.showPrev = this.showPrev.bind(this)
    this.showNext = this.showNext.bind(this)
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
    const trackWidth = this.props.items.length * 600
    const offset = this.state.currentSlideIndex * 600

    return {
      width: `${trackWidth}px`,
      transform: `translate3d(-${offset}px, 0px, 0px)`
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const slides = this.props.items.map((item, index) => {
      return (
        <div key={index} className={`slide ${item.color}`}>
          {item.title}
        </div>
      )
    })

    return (
      <div className="app-slider">
        <h1>{this.props.title}</h1>

        <div className="slider">
          <div className="slider-track" style={this.getSlideTrackStyle()}>
            {slides}
          </div>
        </div>

        <div className="controls">
          <div className="btn btn-prev" onClick={this.showPrev}>
            <GrPrevious />
          </div>
          <div className="btn btn-next" onClick={this.showNext}>
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
