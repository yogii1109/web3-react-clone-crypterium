import { fontFace } from 'polished'
import styled from 'styled-components'
import { I_Section } from '../../../../styles/styled'
import { colors, fontSizes, lineHeights, screenSizes } from '../../../../styles/theme'
import Slider from 'react-slick'

export const Section = styled.div<I_Section>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

export const BgImage = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`

export const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0 !important;
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: -15px;
  padding: 0 15px;
`
export const GridBox = styled.div`
  display: grid;
  @media (max-width: ${screenSizes.M}px) {
    padding: 25px 15px 30px;
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 2fr 10fr;
  }
`

export const GrdItem = styled.div`
  padding: 0 15px;
  width: 100%;
`

export const Icon = styled.div``

export const Card = styled.div`
  width: 100%;
`

export const Author = styled.div`
  margin-top: 25px;
  border-left: 2px solid ${colors.white};
  padding-left: 25px;
  line-height: 1.2;
`

export const AuthorName = styled.h5`
  color: ${colors.white};
  font-size: ${fontSizes.S};
  margin: 0 0 20px;
  font-weight: 500;
`

export const Post = styled.span`
  font-weight: 600;
  font-size: ${fontSizes.XS};
  margin: 0;
  padding: 0;
  color: ${colors.grey};
`
