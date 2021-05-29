import PropTypes from 'prop-types'
import React, { memo } from 'react'

import * as Styles from './styles'

/**
 * Generic item for all of similar types item view
 * @param {object} props
 * @returns Individual item
 */
const BaseItem = (props) => {
  const {
    item: { title, body },
  } = props

  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      {Object.keys(body).map((key, index) => (
        <Styles.Body key={body[key] + index}>
          {key}: {body[key]}
        </Styles.Body>
      ))}
    </Styles.Wrapper>
  )
}
BaseItem.propTypes = {
  item: PropTypes.object.isRequired,
}
BaseItem.defaultProps = {}
export default memo(BaseItem)
