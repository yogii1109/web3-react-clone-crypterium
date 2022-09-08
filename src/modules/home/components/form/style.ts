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
  padding-left: 15px;
  padding-right: 15px;
`
export const Header = styled.div`
  margin-bottom: 30px;
  color: ${colors.lightblack};
  font-size: ${fontSizes.M};
  line-height: ${lineHeights.M};
  font-weight: 700;
`

export const GridBox = styled.div`
  display: grid;
  @media (max-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 5fr 7fr;
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 4fr 8fr;
  }
`

export const GridBox2 = styled.div`
  display: grid;
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 7fr 5fr;
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-template-columns: 6fr 6fr;
  }
`

export const GridItem = styled.div`
  padding-left: 15px;
  padding-right: 15px;
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
  opacity: ${(props) => (props.hasBackground ? `0.8` : ``)};
  font-size: ${fontSizes.XL};
  text-align: ${(props) => (props.aling ? `${props.aling}` : '')};
  font-weight: 700;
  line-height: ${lineHeights.XXL};
  @media (max-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.L};
  }
`

export const Box = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: grid;
  @media (max-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    margin: 15px 5px;
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
export const GridBox3 = styled.div`
  display: grid;
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(2, 6fr);
  }
`

export const Button = styled.button`
  background-color: ${colors.leafgreen};
  color: ${colors.white};
  font-size: ${fontSizes.XS};
  min-width: 185px;
  min-height: 56px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`
