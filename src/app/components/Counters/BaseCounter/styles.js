import styled from 'styled-components'

import { Flex, FlexCenter } from 'app/configs/commonStyles'
import { colors } from 'app/themes/colorPalette'

export const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
`
export const CounterItem = styled(Flex)`
  padding: 10px;
  border-radius: 8px;
  background: ${colors.black};
`
export const CounterLabel = styled(Flex)`
  align-items: center;
  padding: 0 10px;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 16px;
`
export const CounterBadge = styled(FlexCenter)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  background: white;
  margin-left: 10px;
  color: ${colors.black};
`
