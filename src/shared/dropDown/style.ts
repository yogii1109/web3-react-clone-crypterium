import styled from 'styled-components'
import { colors } from '../../styles/theme'

interface I_DropDown {
  top?: string
}

export const DropDownContainer = styled.div<I_DropDown>`
  position: absolute;
  width: 240px;
  top: 10px;
`

export const DropDownBox = styled.div<I_DropDown>`
  /* position: absolute;
top:${(props) => (props.top ? props.top.valueOf() : '')}; */
  margin-top: 24px;
  background-color: ${colors.dropdownbg};
  padding: 35px 45px;
  width: 240px;
  text-align: left;
`

interface I_Item {
  value: boolean
}

export const Item = styled.div<I_Item>`
  color: ${colors.white};
  margin-top: 10px;
  margin-left: 0;
  font-size: 16px;
  opacity: ${(props) => (props.value.valueOf() ? 1 : 0.3)};
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    opacity: 0.3;
  }
`
