import styled from 'styled-components'

import { Flex, FlexCenter } from 'app/configs/commonStyles'
import { colors } from 'app/themes/colorPalette'
export const Wrapper = styled(Flex)`
  height: 80px;
  background: ${colors.black};
  position: fixed;
  width: 100%;
  padding: 0 20%;
  align-items: center;
  overflow: none;
`
export const CircleBadge = styled(FlexCenter)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  background: white;
  margin-right: 10px;
  color: ${colors.black};
`
