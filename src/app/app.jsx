import React from 'react'
import Slider from './components/slider'

const dummyKey = import.meta.env.VITE_DUMMY_KEY
const items = [
  { title: 'Eins', color: 'blue' },
  { title: 'Zwei', color: 'red' },
  { title: 'Drei', color: 'yellow' }
]

export default class App extends React.Component {
  componentDidMount() {
    console.log('### VITE_DUMMY_KEY', dummyKey)
  }

  render() {
    return (
      <div className="app-wrapper">
        <section>
          <div className="container">
            <Slider title="My title" items={items} />
          </div>
        </section>
      </div>
    )
  }
}
