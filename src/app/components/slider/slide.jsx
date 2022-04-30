import React from 'react'
import PropTypes from 'prop-types'

class Slide extends React.Component {
  getBackgroundImage() {
    const { src, width } = this.props

    return {
      backgroundImage: `url(${src})`,
      width: `${width}px`
    }
  }

  render() {
    const { isActive, title } = this.props

    return (
      <div className={`slide ${isActive ? 'is-active' : ''}`} style={this.getBackgroundImage()}>
        <div className="image-title">{title}</div>
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
