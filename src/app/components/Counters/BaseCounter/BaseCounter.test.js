import {
  cleanup,
  render as testRender,
  fireEvent,
} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import BaseCounter from '..'

afterEach(cleanup)

it('renders ConfigSelect without crasing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BaseCounter name="Users" count={10} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', () => {
  const tree = renderer.create(<BaseCounter name="Users" count={10} />).toJSON()
  expect(tree).toMatchSnapshot()
})
