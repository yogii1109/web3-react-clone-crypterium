import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../styles/theme'

export const CarouselCard = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  background-color: ${colors.white};
  height: auto;
  @media (max-width: ${screenSizes.S}px) {
    padding: 25px 15px 30px;
  }
  @media (min-width: ${screenSizes.S}px) {
    padding: 30px 25px 40px;
  }
  @media (min-width: ${screenSizes.M}px) {
    padding: 40px 40px 60px;
  }
`

export const CardCategory = styled.p`
  text-align: start;
  font-size: ${fontSizes.XS};
  color: ${colors.leafgreen};
  margin-bottom: 20px;
  font-weight: 600;
`

export const CardTitle = styled.h3`
  text-align: start;
  font-size: ${fontSizes.M};
  color: ${colors.lightblack};
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: ${lineHeights.L};
`

export const CardText = styled.p`
  text-align: start;
  color: ${colors.grey};
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.S};
  margin-top: 25px;
  margin-bottom: 25px;
`

export const CardDate = styled.p`
  text-align: start;
  color: ${colors.lightblack};
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.S};
  font-weight: 700;
`
