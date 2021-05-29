import {
  cleanup,
  render as testRender,
  fireEvent,
} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import BaseItem from '..'

afterEach(cleanup)

const data = {
  title: 'Hello',
  body: {
    id: 1,
    content: 'There',
  },
}

it('renders ConfigSelect without crasing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BaseItem item={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', () => {
  const tree = renderer.create(<BaseItem item={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
