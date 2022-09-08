import styled from 'styled-components'
import bgImage from '../../assets/images/bg_image.png'
import { colors, fontSizes, screenSizes } from '../../styles/theme'

export const HeadingBlock = styled.div``
export const Div = styled.div`
  background-image: url(${bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const Screen1 = styled.div`
  max-width: 1200px;
`
export const GridBox = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  display: grid;
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 7fr 5fr;
  }
`
export const Column = styled.div``

export const Heading = styled.h1`
  margin: 0;
  color: ${colors.white};
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.XXL};
  }
  @media (min-width: ${screenSizes.M}px) {
    font-size: ${fontSizes.XXXL};
  }
`
export const Content = styled.div`
  margin-bottom: 40px;
  @media (min-width: ${screenSizes.XL}px) {
    max-width: 75%;
  }
`

export const Para = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: ${fontSizes.S};
  margin-bottom: 25px;
`

export const ButtonsGroup = styled.div`
  display: flex;
  margin-left: -15px;
  margin-bottom: 40px;
  @media (max-width: ${screenSizes.XS}px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const ButtonWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

export const Button = styled.button`
  min-width: 185px;
  margin-top: 20px;
  background: none;
  border: none;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 20px 30px;
  border-radius: 30px;
  font-size: ${fontSizes.XS};
  cursor: pointer;
`
export const VideoBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 20px 0px 0px 0px;
  padding: 0;
  background: none;
  border: none;
  font-size: ${fontSizes.S};
  color: ${colors.white};
  cursor: pointer;
`

export const BtnText = styled.div``

export const TextGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const Box = styled.div``

export const Number = styled.span`
  color: ${colors.white};
  font-size: ${fontSizes.XXL};
  font-style: bold;
  font-weight: 900;
  @media (max-width: ${screenSizes.XS}px) {
    font-size: ${fontSizes.XL};
    font-weight: 700;
  }
`

export const Text = styled.span`
  color: ${colors.white};
  font-size: ${fontSizes.S};
  @media (max-width: ${screenSizes.XS}px) {
    font-size: ${fontSizes.SS};
  }
`
