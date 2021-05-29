import styled from 'styled-components'

import { Flex } from 'app/configs/commonStyles'
import { colors } from 'app/themes/colorPalette'
export const Wrapper = styled.div`
  padding: 10px 30px;
  width: 40vw;
`
export const Row = styled(Flex)`
  justify-content: space-between;
  height: 80px;
  align-items: center;
  color: ${colors.lightBlack};
`
export const TextLabel = styled(Flex)`
  width: 20%;
  height: 100%;
  font-size: 20px;
  align-items: center;
  ::after {
    content: '*';
  }
`
export const TextInput = styled.input`
  width: 60%;
  border: 0.5px solid rgba(8, 8, 8, 0.2);
  background: #f3f3f3;
  border-radius: 8px;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
`
export const Footer = styled(Flex)`
  margin-top: 10px;
  border-top: 0.1px solid rgba(64, 64, 64, 0.1);
  padding-top: 20px;
  justify-content: flex-end;
`
