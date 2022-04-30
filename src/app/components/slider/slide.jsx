import React from 'react'
import PropTypes from 'prop-types'

class Slide extends React.Component {
  constructor(props) {
    super(props)
  }

  getBackgroundImage() {
    return {
      backgroundImage: `url(${this.props.src})`,
      width: `${this.props.width}px`
    }
  }

  render() {
    return (
      <div
        className={`slide ${this.props.isActive ? 'is-active' : ''}`}
        style={this.getBackgroundImage()}
      >
        <div className="image-title">{this.props.title}</div>
      </div>
    )
  }
}

Slide.defaultProps = {
  title: '',
  src: '',
  width: 0,
  isActive: false
}

Slide.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  isActive: PropTypes.bool
}

export default Slide
