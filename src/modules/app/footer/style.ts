import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: -15px;
`

export const Grid = styled.div`
  display: grid;
  place-items: center;
  @media (max-width: ${screenSizes.S}px) {
    width: 100%;
  }
  @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: 10fr;
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 8fr;
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 3fr 4fr 5fr;
    place-items: inherit;
  }
`

export const GridItem = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

export const Box = styled.div`
  margin-bottom: 40px;
`

export const FooterLogo = styled.div`
  margin: 0 0 20px;
  width: 175px;
  img {
    width: 100%;
  }
`

export const FooterTitle = styled.h4`
  margin: 0 0 40px 0;
  color: ${colors.white};
  font-size: ${fontSizes.S};
  @media (max-width: ${screenSizes.L}px) {
    text-align: center;
  }
`

export const FooterAddress = styled.address`
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.XS};
  color: ${colors.white};
  text-decoration: none;
  @media (max-width: ${screenSizes.L}px) {
    text-align: center;
  }
`

export const GridMenu = styled.div`
  display: grid;
  @media (max-width: ${screenSizes.M}px) {
    row-gap: 15px;
    grid-template-columns: repeat(2, 6fr);
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(3, 4fr);
  }
`

export const Menu = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`

export const MenuItem = styled.a`
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.XS};
  color: ${colors.white};
`
