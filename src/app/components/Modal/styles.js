import styled, { css } from 'styled-components'

export const modalContent = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  width: 'max-content',
  borderRadius: '8px',
  zIndex: '10',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: 2,
}

export const modalOverlay = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 3,
}

export const CloseIconWrapper = styled.div`
  position: relative;
  float: right;
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
`
export const Cross = styled.img`
  filter: invert(1);
`
export const ClearFix = styled.div`
  content: '';
  clear: both;
  display: table;
`
export const Content = styled.div`
  padding: ${(p) => (p.padding ? p.padding : '10px')};
`
export const TitleBox = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  padding-left: 20px;
  height: 50px;
  color: rgba(0, 0, 8, 0.8);
  border-bottom: ${(props) =>
    !props.subTitle ? '0.5px solid rgba(0, 0, 0, 0.05)' : null};
  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`

export const SubTitle = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  padding-left: 30px;
  color: rgba(0, 0, 8, 0.8);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
`
