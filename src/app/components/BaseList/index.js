import PropTypes from 'prop-types'
import React from 'react'

import { _posts } from 'app/store/selectors/posts'

import * as Styles from './styles'

import BaseItem from '../BaseItem'
/**
 * Generic List for all of similar types list view
 * Renders a list of items
 * This list can be optimized using react-virtualized/react-window
 */
const BaseList = (props) => {
  const { data } = props

  return (
    <Styles.Wrapper>
      {data.map((item) => (
        <BaseItem key={item.id} item={item} />
      ))}
    </Styles.Wrapper>
  )
}

BaseList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BaseList
