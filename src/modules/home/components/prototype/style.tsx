import styled from 'styled-components'

import backgroundimg from '../../../../assets/images/video_card_large.png'
import { colors, fontSizes, screenSizes } from '../../../../styles/theme'

interface I_Section {
  hasBackground?: boolean
  paddingtop: string
  paddingbottom: string
}
export const Section = styled.div<I_Section>`
  background-image: ${(props) => (props.hasBackground?.valueOf() ? `url(${backgroundimg})` : '')};
  background-repeat: no-repeat;
  background-position: ${(props) => (props.hasBackground?.valueOf() ? `left 45vw bottom 65%` : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${screenSizes.M}px) {
    padding: 70px 15px;
  }
  @media (min-width: ${screenSizes.M}px) {
    padding: 100px 15px;
  }
  @media (max-width: ${screenSizes.L}px) {
    background-color: ${colors.lightestblue};
    background-image: none;
  }
  @media (min-width: ${screenSizes.L}px) {
    padding-top: ${(props) => (props.paddingtop ? `${props.paddingtop}` : '')};
    padding-bottom: ${(props) => (props.paddingbottom ? `${props.paddingbottom}` : '')};
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
    display: ${(props) => (props.flex ? `flex` : ``)};
    flex-direction: ${(props) => (props.flex ? `column-reverse` : ``)};
  }
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: ${(props) => (props.reverse ? `7fr 5fr` : `5fr 7fr`)};
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 6fr 6fr;
  }
`

interface I_LeftBox {
  flex?: boolean
}

export const ImgContainer = styled.div`
  display: none;
  @media (max-width: ${screenSizes.L}px) {
    display: flex;
    justify-content: center;
    padding: 0 15px;
    width: 100%;
  }
`

export const ImgPlace = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const LeftBox = styled.div<I_LeftBox>`
  display: ${(props) => (props.flex?.valueOf() ? 'flex' : 'block')};
  align-items: ${(props) => (props.flex?.valueOf() ? 'center' : '')};
  width: 100%;
`

export const RightBox = styled.div`
  width: 100%;
`
interface I_Box {
  boxmargin?: boolean
}
export const Box = styled.div<I_Box>`
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: ${screenSizes.M}px) {
    margin-left: ${(props) => (props.boxmargin ? 'auto' : '')};
    max-width: ${(props) => (props.boxmargin ? '570px' : '')};
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    @media (max-width: ${screenSizes.M}px) {
      margin-right: auto;
      max-width: 570px;
    }
  }
`

export const Header = styled.div`
  margin-bottom: 30px;
`

export const SmallHeading = styled.h5`
  text-transform: uppercase;
  font-size: ${fontSizes.XS};
  font-weight: 500;
  color: ${colors.grey};
  margin-bottom: 20px;
`

export const Heading = styled.h2`
  color: ${colors.lightblack};
  font-weight: 700;
  margin: 20px 0 0;
  @media (max-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.L};
  }
`

export const Content = styled.div``

export const List = styled.ul`
  li {
    list-style-type: '- ';
  }
`

export const ListItem = styled.li`
  font-size: ${fontSizes.XS};
  color: ${colors.grey};
  margin-top: 5px;
  padding: 0 0 0 15px;
  &:first-child {
    margin-top: 0px;
  }
`

export const Para = styled.p`
  margin: 25px 0 35px;
  color: ${colors.grey};
`
