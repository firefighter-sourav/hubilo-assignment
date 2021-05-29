import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FlexCenter } from 'app/configs/commonStyles'
import { colors } from 'app/themes/colorPalette'

import { BaseNavPill } from '../NavPill/styles'

export const Wrapper = styled.div`
  ${BaseNavPill}
`

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
export const StyledPill = styled(FlexCenter)`
  cursor: pointer;
  height: 100%;
  width: 100%;
`
export const Popper = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  top: 70px;
  height: 160px;
  background: ${colors.black};
  border-radius: 8px;
  & > a {
    margin-top: 10px;
  }
`
