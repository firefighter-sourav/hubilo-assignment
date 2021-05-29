import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FlexCenter } from 'app/configs/commonStyles'
import { colors } from 'app/themes/colorPalette'

export const Select = styled.select`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70%;
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid white;
  font-weight: bold;
  padding: 0 10px;
  background: ${colors.black};
  color: white;
`
export const Option = styled.option`
  font-size: 16px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
