import PropTypes from 'prop-types'
import React from 'react'

import NavBar from 'app/components/NavBar/Index'

import * as Styles from './styles'
const MainLayout = (props) => {
  return (
    <>
      <NavBar />
      <Styles.Wrapper>{props.children}</Styles.Wrapper>
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.node,
}
MainLayout.defaultProps = {}
export default MainLayout
