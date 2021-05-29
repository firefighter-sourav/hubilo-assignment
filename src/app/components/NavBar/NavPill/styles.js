import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { FlexCenter } from 'app/configs/commonStyles'
import { colors } from 'app/themes/colorPalette'

export const BaseNavPill = css`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70%;
  margin: 0 10px;
  max-height: 60px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid white;
  color: white;
  font-weight: bold;
`
export const StyledLink = styled(NavLink)`
  ${BaseNavPill}
`
export const StyledDiv = styled.a`
  text-decoration: none;
  cursor: not-allowed;
  opacity: 0.3;
  ${BaseNavPill}
`
export const CircleBadge = styled(FlexCenter)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  background: white;
  color: ${colors.black};
  margin-right: 10px;
`
