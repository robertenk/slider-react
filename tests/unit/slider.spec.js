import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Slider from '@/app/components/slider'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('should display correct title', () => {
  const items = []

  act(() => {
    render(<Slider title="Dummy" items={items} />, container)
  })

  const titleElem = container.querySelector('h1').innerHTML
  expect(titleElem).toBe('Dummy')
})

test("should change active slide after clicking on 'next' button", () => {
  const items = [
    { id: 0, src: null, title: 'First' },
    { id: 1, src: null, title: 'Second' }
  ]

  act(() => {
    render(<Slider title="Dummy" items={items} />, container)
  })

  const slides = document.getElementsByClassName('slide')
  expect(slides.length).toBe(2)
  expect(slides[0].classList.contains('is-active')).toBe(true)
  expect(slides[1].classList.contains('is-active')).toBe(false)

  const nextButton = document.getElementById('btn-next')

  act(() => {
    nextButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(slides[0].classList.contains('is-active')).toBe(false)
  expect(slides[1].classList.contains('is-active')).toBe(true)
})
