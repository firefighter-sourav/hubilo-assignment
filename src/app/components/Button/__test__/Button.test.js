import {
  cleanup,
  render as testRender,
  fireEvent,
} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import Button from '../index.js'

afterEach(cleanup)

it('renders ConfigSelect without crasing', () => {
  const onClick = jest.fn()
  const div = document.createElement('div')
  ReactDOM.render(<Button onClick={onClick}>Submit</Button>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot', () => {
  const onClick = jest.fn()
  const tree = renderer
    .create(<Button onClick={onClick}>Submit</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('onClick should have been called', () => {
  const onClick = jest.fn()
  const utils = testRender(<Button onClick={onClick}>Submit</Button>)
  expect(onClick).toHaveBeenCalledTimes(0)

  const button = utils.getByTestId('config-button')
  fireEvent.click(button)
  expect(onClick).toHaveBeenCalledTimes(1)
  fireEvent.click(button)
  expect(onClick).toHaveBeenCalledTimes(2)
})
