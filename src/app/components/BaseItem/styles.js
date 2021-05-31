import styled from 'styled-components'

import { colors } from 'app/themes/colorPalette'
import { fonts } from 'app/themes/fontPalette'

export const Wrapper = styled.div``
export const Title = styled.div`
  font-size: 18px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-weight: bold;
  font-family: ${fonts.roboto};
`
export const Body = styled.div`
  font-size: 16px;
  color: ${colors.lightBlack};
  text-transform: capitalize;
`
