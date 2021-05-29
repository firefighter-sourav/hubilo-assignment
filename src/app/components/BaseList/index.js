import PropTypes from 'prop-types'
import React from 'react'

import { _posts } from 'app/store/selectors/posts'

import * as Styles from './styles'

import BaseItem from '../BaseItem'
/**
 * Generic List for all of similar types list view
 * @param {object} props
 * @returns List of items
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
