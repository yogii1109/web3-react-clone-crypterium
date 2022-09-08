import styled from 'styled-components'
import { colors, fontSizes, lineHeights, screenSizes } from '../../styles/theme'

export const CardWrapper = styled.div``

// border-color :  ${(props) =>
//     (props.state == "success" && "rgb(0 128 0)") ||
//     (props.state == "error" && "rgb(255 0 0)") || 'rgb(0 123 255 / 25%)'};
//     ${inputStyles}

interface I_card {
  backgroundColor?: string
}

export const Card = styled.div<I_card>`
  background-color: ${(props) =>
    (props.backgroundColor == 'purple' && `${colors.purple}`) ||
    (props.backgroundColor == 'darkBlue' && `${colors.darkBlue}`) ||
    (props.backgroundColor == 'leafgreen' && `${colors.leafgreen}`)};

  @media (max-width: ${screenSizes.M}px) {
    padding: 50px 15px;
  }
  @media (min-width: ${screenSizes.M}px) {
    padding-top: 75px;
    padding-bottom: 75px;
  }
  @media (min-width: ${screenSizes.L}px) {
    padding: 100px 30px;
  }
`

export const Content = styled.div`
  max-width: 360px;
  margin: auto;
`

export const CardIcon = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-bottom: 5px;
  height: 60px;
  line-height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h5`
  margin: 20px 0;
  padding: 0;
  font-weight: 700;
  color: ${colors.white};
  font-size: ${fontSizes.L};
`

export const Para = styled.p`
  color: ${colors.white};
  margin-top: 20px;
  font-size: ${fontSizes.SS};
  line-height: ${lineHeights.M};
`
