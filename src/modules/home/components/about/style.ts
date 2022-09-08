import styled from 'styled-components'
import { colors, fontSizes, screenSizes } from '../../../../styles/theme'

export const Container = styled.div`
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
  padding-left: 15px;
  padding-right: 15px;
  display: grid;
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: 5fr 7fr;
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: 4fr 8fr;
  }
`
export const Box = styled.div`
  margin-left: -15px;
  width: 100%;
  padding: 15px;
`

export const AboutInfo = styled.h5`
  color: ${colors.grey};
  padding: 0;
  margin: 0 0 20px 0;
  font-size: ${fontSizes.XS};
  font-weight: 300;
  text-transform: uppercase;
`
export const Heading = styled.h2`
  color: ${colors.lightblack};
  font-size: ${fontSizes.XL};
`

export const Para = styled.p`
  font-size: ${fontSizes.SS};
  color: ${colors.lightblack};
  margin: 0 0 25px 0;
  font-weight: 400;
`

export const Anchor = styled.a`
  color: ${colors.leafgreen};
  font-size: ${fontSizes.SS};
  text-decoration: underline;
`
