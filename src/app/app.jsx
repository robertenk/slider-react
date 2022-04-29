import React from 'react'
import Slider from './components/slider'

const dummyKey = import.meta.env.VITE_DUMMY_KEY

export default class App extends React.Component {
  componentDidMount() {
    console.log('### VITE_DUMMY_KEY', dummyKey)
  }

  render() {
    return (
      <div className="app-wrapper">
        <section>
          <div className="container">
            <Slider />
          </div>
        </section>
      </div>
    )
  }
}
