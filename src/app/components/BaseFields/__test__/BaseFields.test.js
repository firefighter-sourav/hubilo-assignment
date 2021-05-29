import {
  cleanup,
  render as testRender,
  fireEvent,
} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import BaseFields from '../index.js'

afterEach(cleanup)

it('renders ConfigSelect without crasing', () => {
  const closeModal = jest.fn()
  const div = document.createElement('div')
  ReactDOM.render(<BaseFields closeModal={closeModal} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', () => {
  const closeModal = jest.fn()
  const tree = renderer.create(<BaseFields closeModal={closeModal} />).toJSON()
  expect(tree).toMatchSnapshot()
})
