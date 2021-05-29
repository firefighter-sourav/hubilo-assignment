import PropTypes from 'prop-types'
import React from 'react'

import { _albumsCount } from 'app/store/selectors/albums'
import { _postsCount } from 'app/store/selectors/posts'
import { _usersCount } from 'app/store/selectors/users'

import * as Styles from './styles'
/**
 * Generic Pill to show count of item
 * Pure function to avoid side effects
 */
const BaseCounter = (props) => {
  const { name, count } = props

  return (
    <Styles.Wrapper>
      <Styles.CounterItem key={name}>
        <Styles.CounterLabel>{name}</Styles.CounterLabel>
        <Styles.CounterBadge>{count}</Styles.CounterBadge>
      </Styles.CounterItem>
    </Styles.Wrapper>
  )
}
BaseCounter.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}
BaseCounter.defaultProps = {}
export default BaseCounter
