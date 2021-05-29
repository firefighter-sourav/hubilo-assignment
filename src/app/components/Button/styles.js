import styled from 'styled-components'

import { FlexCenter } from 'app/configs/commonStyles'
import { fonts } from 'app/themes/fontPalette'
export const Wrapper = styled(FlexCenter)`
  padding: 15px 40px;
  width: 20%;
  border-radius: 8px;
  background: rgb(32, 32, 32);
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-family: ${fonts.roboto};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
