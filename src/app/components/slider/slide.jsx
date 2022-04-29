import React from 'react'
import PropTypes from 'prop-types'

class Slide extends React.Component {
  constructor(props) {
    super(props)
  }

  getBackgroundImage() {
    return {
      backgroundImage: `url(https://picsum.photos/1000)`
    }
  }

  render() {
    return (
      <div className="slide" style={this.getBackgroundImage()}>
        <div className="image-title">{this.props.title}</div>
      </div>
    )
  }
}

Slide.defaultProps = {
  title: '',
  src: ''
}

Slide.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string
}

export default Slide
