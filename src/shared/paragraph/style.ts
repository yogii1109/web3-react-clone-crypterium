import { fontFace } from 'polished'
import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../styles/theme'

export interface I_Para {
  marginTop: string
  marginBottom: string
}

export const Para = styled.p<I_Para>`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : '')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}` : '')};
  font-size: ${fontSizes.M};
  line-height: ${lineHeights.L};
  color: ${colors.white};
  width: 100%;
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${fontSizes.S};
    line-height: ${lineHeights.M};
  }
`
