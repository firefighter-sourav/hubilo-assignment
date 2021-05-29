import styled from 'styled-components'
/**
 * All common styles here
 */
export const Flex = styled.div`
  display: flex;
`
export const FlexCenter = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Icon = styled.img`
  height: ${(props) => (props.size ? props.size : '12px')};
  width: auto;
  filter: ${(props) => (props.invert ? 'invert(100%)' : 'none')};
`
