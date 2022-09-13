import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../../../styles/theme'

interface I_Section {
  hasBackground?: boolean
  paddingbottom?: string
  paddingtop?: string
}

export const Section = styled.div<I_Section>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.hasBackground ? `${colors.black}` : '')};
  @media (max-width: ${screenSizes.S}px) {
    padding: 70px 15px;
  }
  @media (min-width: ${screenSizes.S}px) {
    padding: 100px 15px;
  }
  @media (min-width: ${screenSizes.L}px) {
    padding-top: ${(props) => (props.paddingtop ? `${props.paddingtop}` : '')};
    padding-bottom: ${(props) => (props.paddingbottom ? `${props.paddingbottom}` : '')};
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: -15px;
`
export const Header = styled.div`
  margin-bottom: 60px;
  color: ${colors.lightblack};
  font-size: ${fontSizes.M};
  line-height: ${lineHeights.M};
  font-weight: 700;
`

interface I_Heading {
  aling: string
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
  font-size: ${fontSizes.XL};
  text-align: ${(props) => (props.aling ? `${props.aling}` : '')};
  font-weight: 700;
  line-height: ${lineHeights.XXL};
  @media (max-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.L};
  }
`

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 83.3%;
`

export const Questions = styled.div`
  margin-bottom: 50px;
`

export const QuestionDiv = styled.div`
  position: relative;
  @media (max-width: ${screenSizes.S}px) {
    padding: 15px 40px 15px 0;
  }
  @media (min-width: ${screenSizes.S}px) {
    padding: 20px 45px 20px 0;
  }
`

export const Question = styled.h4`
  font-size: ${fontSizes.S};
  color: ${colors.lightblack};
`
export const QuestionWrap = styled.div`
  border-top: 1px solid ${colors.borderGrey};
  border-bottom: 1px solid ${colors.borderGrey};
`

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: auto;
  width: 30px;
  height: 30px;
  bottom: 0;
`

interface I_Answer {
  display?: boolean
}
export const Answer = styled.div<I_Answer>`
  padding-bottom: 20px;
  display: ${(props) => (props.display?.valueOf() === true ? 'block' : 'none')};
`

export const Para = styled.p`
  margin: 0;
  padding: 0;
  color: ${colors.grey};
`

export const Button = styled.div`
  text-align: center;
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
