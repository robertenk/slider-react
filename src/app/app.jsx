import React from 'react'
import Slider from './components/slider'
import API from './api'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dummyImages: []
    }
  }

  componentDidMount() {
    this.getDummyImages()
  }

  async getDummyImages() {
    const dummyImages = await API.getDummyImages().catch(() => {
      console.log('An error occured.')
    })

    this.setState({ dummyImages })
  }

  render() {
    const { dummyImages } = this.state

    return (
      <div className="app-wrapper">
        <section>
          <div className="container">
            <Slider title="Paris 2022" items={dummyImages} />
          </div>
        </section>
      </div>
    )
  }
}
