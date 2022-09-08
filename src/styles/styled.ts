import styled, { css, ThemeProps } from 'styled-components'
import { fontSizes, screenSizes, gapSizes, Theme, colors, Themes, lineHeights, Colors } from './theme'
import { rgba } from 'polished'

export interface I_InputDiv {
  width?: string
  marginTop?: string
}

export const InputDiv = styled.div<I_InputDiv>`
  display: block;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : '20px')};
`
export interface I_Input {
  height?: string
  width?: string
}
export const Input = styled.input<I_Input>`
  height: ${(props) => (props.height ? `${props.height}` : '56px')};
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  background-color: ${colors.greyblack};
  color: ${colors.yellowwhite};
  border: none;
  box-shadow: none;
  padding: 18px 20px;
  border-radius: 30px;
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.S};
  :hover,
  :focus {
    outline: none;
    background-color: ${colors.white};
    color: ${colors.greyblack};
  }
`
export const TextAreaDiv = styled.div<I_InputDiv>`
  display: block;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : '20px')};
`

export const TextArea = styled.textarea<I_Input>`
  height: ${(props) => (props.height ? `${props.height}` : '190px')};
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  background-color: ${colors.greyblack};
  color: ${colors.yellowwhite};
  border: none;
  box-shadow: none;
  padding: 18px 20px;
  border-radius: 30px;
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.S};
  :hover,
  :focus {
    outline: none;
    background-color: ${colors.white};
    color: ${colors.greyblack};
  }
`
export interface I_Section {
  hasBackground?: boolean
  paddingtop: string
  paddingbottom: string
}

export const Section = styled.div<I_Section>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.hasBackground ? `${colors.dropdownbg}` : '')};
  @media (max-width: ${screenSizes.S}px) {
    padding: 70px 15px;
  }
  @media (min-width: ${screenSizes.S}px) {
    padding: 100px 15px;
  }
  @media (min-width: ${screenSizes.L}px) {
    padding-top: ${(props) => (props.paddingtop ? `${props.paddingtop}` : '')};
    padding-bottom: ${(props) => (props.paddingbottom ? `${props.paddingbottom}` : '')};
    padding-left: 15px;
    padding-right: 15px;
  }
`
export const Header = styled.div`
  margin-bottom: 30px;
`

interface I_Heading {
  aling?: string
  hasBackground?: boolean
}

export const PricingText = styled.h5<I_Heading>`
  color: ${colors.grey};
  padding: 0;
  margin: 0 0 20px 0;
  font-size: ${fontSizes.XS};
  font-weight: 300;
  text-transform: uppercase;
  text-align: ${(props) => (props.aling ? `${props.aling}` : '')};
`

export const Heading = styled.h2<I_Heading>`
  color: ${(props) => (props.hasBackground ? `${colors.white}` : `${colors.lightblack}`)};
  opacity: ${(props) => (props.hasBackground ? `0.8` : ``)};
  font-size: ${fontSizes.XL};
  text-align: ${(props) => (props.aling ? `${props.aling}` : '')};
  font-weight: 700;
  line-height: ${lineHeights.XXL};
  @media (max-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.L};
  }
`
interface I_Para {
  marginTop: string
  marginBottom: string
  hasBackground: boolean
}
export const Para = styled.p<I_Para>`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : '')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}` : '')};
  color: ${colors.white};
  opacity: ${(props) => (props.hasBackground ? `0.8` : ``)};
  font-size: ${fontSizes.SS};
`

export const ShowMoreA = styled.span`
  position: relative;
  background: linear-gradient(325deg, #5b467e 0, #3365a7 50%, #47cca6 100%);
  min-height: 56px;
  min-width: 185px;
  border-radius: 30px;
  color: ${colors.lightblack};
  display: inline-block;
`

export const Btn = styled.span`
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  border-radius: 30px;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.leafgreen};
    color: ${colors.white};
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
`
