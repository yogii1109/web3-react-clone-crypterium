import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../../../styles/theme'

interface I_Section {
  hasBackground?: boolean
  padding?: boolean
}

export const Section = styled.div<I_Section>`
  display: flex;
  justify-content: center;
  @media (max-width: ${screenSizes.M}px) {
    padding: 70px 15px;
  }
  @media (min-width: ${screenSizes.M}px) {
    padding: 100px 15px;
  }
  @media (min-width: ${screenSizes.L}px) {
    padding: 140px 15px;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: -15px;
`

export const Header = styled.div`
  margin-bottom: 60px;
  /* margin: 0 0 25px; */
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

export const ListGridView = styled.div`
  display: grid;
  @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: repeat(2, 6fr);
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(3, 4fr);
  }
`

export const GridItem = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 60px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const CardImg = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  height: 60px;
  img {
    height: 100%;
    width: 100%;
  }
`

export const CardHeading = styled.h3`
  margin: 20px 0;
  font-size: ${fontSizes.L};
  color: ${colors.lightblack};
`

export const CardDescription = styled.p`
  color: ${colors.grey};
  font-size: ${fontSizes.SS};
  margin: 20px 0 0;
`
