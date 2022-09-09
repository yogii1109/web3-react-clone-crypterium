import { CgFontHeight } from 'react-icons/cg'
import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${screenSizes.S}px) {
    padding-bottom: 70px;
  }
  @media (min-width: ${screenSizes.M}px) {
    padding-bottom: 100px;
  }
  @media (min-width: ${screenSizes.L}px) {
    padding-bottom: 140px;
  }
`
export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`
export const Header = styled.div`
  margin-bottom: 60px;
  margin: 0 0 25px;
  color: ${colors.lightblack};
  font-size: ${fontSizes.M};
  line-height: ${lineHeights.M};
  font-weight: 700;
`

export const PricingText = styled.h5`
  color: ${colors.grey};
  padding: 0;
  margin: 0 0 20px 0;
  font-size: ${fontSizes.XS};
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
`

export const Heading = styled.h2`
  color: ${colors.lightblack};
  font-size: ${fontSizes.XL};
  text-align: center;
  line-height: ${lineHeights.XXL};
  @media (max-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.L};
  }
`

export const PricingTab = styled.div``

export const TabContainer = styled.div``

export const TabNavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  @media (max-width: ${screenSizes.XS}px) {
    flex-wrap: wrap;
  }
`

interface I_NavItem {
  active: boolean
}

export const NavItem = styled.ul`
  margin: 0 20px 35px;
  padding: 0;
  display: inline-flex;
  cursor: pointer;
  &:hover {
    strong {
      color: ${colors.lightblack};
    }
    img {
      filter: grayscale(0);
    }
  }
`
export const NavText = styled.strong<I_NavItem>`
  color: ${(props) => (props.active.valueOf() ? `${colors.lightblack}` : `${colors.lightGrey}`)};
`

export const NavImg = styled.img<I_NavItem>`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  filter: ${(props) => (props.active.valueOf() ? `grayscale(0)` : `grayscale(100%)`)};
`

export const GridBox = styled.div`
  display: grid;
  row-gap: 10px;
  @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: repeat(2, 6fr);
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(4, 4fr);
  }
`
interface I_GridItem {
  color?: string
}

export const GridItem = styled.div<I_GridItem>`
  border: ${(props) =>
    (props.color == 'purple' && `5px solid ${colors.purple}`) ||
    (props.color == 'darkBlue' && `5px solid ${colors.darkBlue}`) ||
    (props.color == 'red' && `5px solid ${colors.red}`) ||
    (props.color == 'leafgreen' && `5px solid ${colors.leafgreen}`)};
  border-radius: 10px;
  padding: 70px 25px 40px;
  display: flex;
  justify-content: center;
  margin: 0 5px;
  flex-direction: column;
  max-width: 100%;
`

export const PriceHeader = styled.div``
export const PriceHeading = styled.h4`
  font-size: ${fontSizes.M};
  color: ${colors.lightblack};
  margin: 0 0 20px;
  text-align: center;
`

export const Price = styled.p<I_GridItem>`
  font-size: ${fontSizes.L};
  color: ${(props) =>
    (props.color == 'purple' && `${colors.purple}`) ||
    (props.color == 'darkBlue' && `${colors.darkBlue}`) ||
    (props.color == 'red' && `${colors.red}`) ||
    (props.color == 'leafgreen' && `${colors.leafgreen}`)};
  margin: 15px 0 0;
  font-weight: 900;
  text-align: center;
`

export const DescList = styled.ul`
  margin-top: 45px;
  margin-bottom: 50px;
  padding: 0;
`
interface I_ListItem {
  active: boolean
}

export const ListItem = styled.li<I_ListItem>`
  list-style: none;
  margin-top: ${(props) => (props.active.valueOf() ? '15px' : '')};
  text-align: center;
`
export const Speed = styled.strong`
  text-align: center;
`

export const Note = styled.span`
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 9px 10px;
  background-color: ${colors.whitishGrey};
  font-size: ${fontSizes.XXS};
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.spaceGrey};
`

export const ListType = styled.span`
  font-size: ${fontSizes.XS};
  color: ${colors.grey};
  line-height: ${lineHeights.XS};
`

export const ItemValue = styled.strong`
  text-align: center;
`

export const CustomButton = styled.div<I_GridItem>`
  padding: 20px 30px;
  background-color: ${(props) =>
    (props.color == 'purple' && `${colors.purple}`) ||
    (props.color == 'darkBlue' && `${colors.darkBlue}`) ||
    (props.color == 'red' && `${colors.red}`) ||
    (props.color == 'leafgreen' && `${colors.leafgreen}`)};
  color: ${colors.white};
  font-size: ${fontSizes.XS};
  width: 100%;
  text-align: center;
  font-weight: 500;
  border-radius: 30px;
  min-height: 56px;
`
