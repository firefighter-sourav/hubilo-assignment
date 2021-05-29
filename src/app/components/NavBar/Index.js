import React from 'react'

import AlbumsNavItem from './AlbumsNavItem'
import NavDropdown from './NavDropdown'
import PostsNavItem from './PostsNavItem'
import * as Styles from './styles'

import Spinner from '../Spinner'

const NavBar = () => {
  return (
    <Styles.Wrapper>
      <Spinner />
      <PostsNavItem />
      <AlbumsNavItem />
      <NavDropdown />
    </Styles.Wrapper>
  )
}

export default NavBar
