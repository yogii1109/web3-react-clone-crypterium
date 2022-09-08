import React from 'react'

import * as Styled from './style'
import * as Shared from '../../../../styles/styled'

export const Graph = () => {
  return (
    <Shared.Section paddingtop="140px" paddingbottom="140px">
      <Styled.Wrapper>
        <Shared.Header>
          <Shared.PricingText aling="center">POPULAR CRYPTOCARRENCY PRICES</Shared.PricingText>
          <Shared.Heading aling="center">Cryptocurrency Prices</Shared.Heading>
        </Shared.Header>
      </Styled.Wrapper>
    </Shared.Section>
  )
}
