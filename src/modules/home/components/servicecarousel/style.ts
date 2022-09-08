import styled from 'styled-components'
import { screenSizes } from '../../../../styles/theme'
import Slider from 'react-slick'

export const StyledSlider = styled(Slider)`
  /* width: 20vw; */
  .slick-slide {
    position: absolute;
    top: 0;
  }
`

interface I_Reverse {
  reverse?: boolean
  flex?: boolean
}

export const Wrapper = styled.div<I_Reverse>`
  max-width: 1200px;
  width: 100%;
  display: grid;
  margin-left: -15px;
  @media (max-width: ${screenSizes.M}px) {
    row-gap: 20px;
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 6fr 6fr;
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 5fr 7fr;
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-template-columns: 4fr 8fr;
  }
`

interface I_GridItem {
  marginLeft?: string
}
export const GridItem = styled.div<I_GridItem>`
  position: relative;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}` : '')};
`
