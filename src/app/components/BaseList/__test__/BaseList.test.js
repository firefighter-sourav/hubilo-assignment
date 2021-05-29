import {
  cleanup,
  render as testRender,
  fireEvent,
} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import BaseList from '..'

afterEach(cleanup)

const data = [
  {
    id: 1,
    title: 'Hello',
    body: {
      id: 1,
      content: 'There',
    },
  },
  {
    id: 2,
    title: 'World',
    body: {
      id: 1,
      content: 'God is almighty',
    },
  },
]

it('renders ConfigSelect without crasing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BaseList data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', () => {
  const tree = renderer.create(<BaseList data={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
