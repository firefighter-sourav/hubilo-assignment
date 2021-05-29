import styled from 'styled-components'

import { colors } from 'app/themes/colorPalette'
import { fonts } from 'app/themes/fontPalette'

export const Wrapper = styled.div`
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-top: 10px;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 4px rgba(0, 0, 0, 0.22);
  }
`
export const Title = styled.div`
  font-size: 18px;
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
