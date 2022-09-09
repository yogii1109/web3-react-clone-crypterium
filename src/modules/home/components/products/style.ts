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

export const Gallery = styled.div<I_Section>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.hasBackground ? `${colors.black}` : '')};
  margin-left: -5px;
  margin-right: -5px;
  @media (min-width: ${screenSizes.L}px) {
    padding-top: ${(props) => (props.paddingtop ? `${props.paddingtop}` : '')};
    padding-bottom: ${(props) => (props.paddingbottom ? `${props.paddingbottom}` : '')};
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: -15px;
  padding: 0 15px;
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
export const ProductsList = styled.div``

export const GridBox = styled.div`
  display: grid;
  width: 100%;
  @media (max-width: ${screenSizes.S}px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
  @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: repeat(2, 6fr);
    row-gap: 10px;
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(3, 4fr);
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-template-columns: repeat(4, 3fr);
  }
`
export const GridBox2 = styled.div`
  display: grid;
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 5fr 7fr;
    margin-bottom: 50px;
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 4fr 8fr;
  }
`

interface I_GridItem {
  paddingLeft?: string
  paddingRight?: string
}

export const GridItem = styled.div<I_GridItem>`
  padding-left: ${(props) => (props.paddingLeft ? `${props.paddingLeft}` : '10px')};
  padding-right: ${(props) => (props.paddingRight ? `${props.paddingRight}` : '10px')};
`

export const Card = styled.div`
  width: 100%;
`

export const CardImg = styled.div`
  border: 3px solid ${colors.whiteborder};
  border-radius: 5px 5px 0 0;
  @media (max-width: ${screenSizes.S}px) {
    width: 100%;
  }
  @media (min-width: ${screenSizes.S}px) {
    height: 240px;
  }
  img {
    height: 100%;
    width: 100%;
    padding: 20px;
    object-fit: contain;
  }
`

export const CardContent = styled.div`
  background-color: ${colors.whiteborder};
  border-radius: 0 0 5px 5px;
  @media (max-width: ${screenSizes.M}px) {
    padding: 25px 10px;
  }
  @media (min-width: ${screenSizes.M}px) {
    padding: 35px 30px;
  }
`

export const CardTitle = styled.h5`
  font-size: ${fontSizes.S};
  margin: 0;
  padding: 0;
  color: ${colors.lightblack};
`

export const CardP = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${fontSizes.SS};
`

export const UList = styled.ul`
  padding: 0;
`

export const UItem = styled.li`
  list-style: none;
  font-size: ${fontSizes.SS};
  color: ${colors.grey};
`

export const Prize = styled.span`
  margin-top: 5px;
  font-weight: 900;
  color: ${colors.leafgreen};
  font-size: ${fontSizes.S};
`

export const Button = styled.p`
  text-align: center;
  margin: 20px 0 0 0;
  background-color: ${colors.leafgreen};
  color: ${colors.white};
  font-size: ${fontSizes.XS};
  min-width: 185px;
  min-height: 56px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
`
interface I_Para {
  marginTop: string
  marginBottom: string
}
export const Para = styled.p<I_Para>`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : '')};
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}` : '')};
  color: ${colors.grey};
  font-size: ${fontSizes.SS};
`

export const WorldImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  display: block;
  opacity: 1;
  @media (max-width: ${screenSizes.L}px) {
    width: 100%;
  }
`

export const GridWrapper1 = styled.div`
  display: grid;
  padding-bottom: 10px;
  @media (max-width: ${screenSizes.S}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: 6fr 6fr;
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 5fr 7fr;
  }
`

export const GridWrapper2 = styled.div`
  display: grid;
  @media (max-width: ${screenSizes.S}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: repeat(3, 6fr);
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 5fr 4fr 3fr;
  }
`

export const ProductImg = styled.div`
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  &:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.fadedGreen};
    .hoverIt {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: ${colors.white};
      font-weight: 500;
      text-align: center;
      font-size: ${fontSizes.M};
      background-color: ${colors.fadedGreen};
      opacity: 1;
    }
  }

  @media (min-width: ${screenSizes.S}px) {
    height: 460px;
  }
  @media (min-width: ${screenSizes.L}px) {
    height: 680px;
  }
`

export const ProductImg2 = styled.div`
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  &:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    .hoverIt {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: ${colors.white};
      font-weight: 500;
      text-align: center;
      font-size: ${fontSizes.M};
      background-color: ${colors.fadedGreen};
      opacity: 1;
    }
  }

  @media (min-width: ${screenSizes.S}px) {
    height: 300px;
  }
  @media (min-width: ${screenSizes.L}px) {
    height: 335px;
  }
`

export const Desc = styled.div`
  display: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  .hoverIt {
    display: none;
  }
`
