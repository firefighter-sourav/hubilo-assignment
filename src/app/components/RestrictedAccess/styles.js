import styled from 'styled-components'

import { FlexCenter } from 'app/configs/commonStyles'
import { fonts } from 'app/themes/fontPalette'
export const Wrapper = styled(FlexCenter)`
  font-size: 30px;
  font-weight: bold;
  height: 50vh;
  width: 100%;
  font-family: ${fonts.roboto};
`
