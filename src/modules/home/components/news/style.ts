import { fontFace } from 'polished'
import styled from 'styled-components'
import { I_Section } from '../../../../styles/styled'
import { colors, fontSizes, lineHeights, screenSizes } from '../../../../styles/theme'
import Slider from 'react-slick'

export const StyledSlider = styled(Slider)`
  /* .slick-list {
    padding: 0 !important;
  } */

  .slick-dots {
    position: absolute;
    bottom: -50px;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: -15px;
`

export const CarouselCard = styled.div`
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
  font-size: ${fontSizes.XS};
  color: ${colors.leafgreen};
  margin-bottom: 20px;
  font-weight: 600;
`

export const CardTitle = styled.h3`
  font-size: ${fontSizes.M};
  color: ${colors.lightblack};
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: ${lineHeights.M};
`

export const CardText = styled.p`
  color: ${colors.grey};
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.S};
  margin-top: 25px;
  margin-bottom: 25px;
`

export const CardDate = styled.span`
  color: ${colors.lightblack};
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.S};
  font-weight: 700;
`

export const Section = styled.div<I_Section>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.hasBackground ? `${colors.palewhite}` : '')};
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

export const CarouselContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  max-width: 100%;
`
