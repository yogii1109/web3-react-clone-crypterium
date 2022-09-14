import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import * as Styled from './style'
import * as Shared from '../../../../styles/styled'
import { colors } from '../../../../styles/theme'
import ReactChart from '../../../../shared/reactchart/ReactChart'

export const Graph: React.FC = () => {
  return (
    <Shared.Section paddingtop="140px" paddingbottom="140px">
      <Styled.Wrapper>
        <Shared.Header>
          <Shared.PricingText aling="center">POPULAR CRYPTOCARRENCY PRICES</Shared.PricingText>
          <Shared.Heading aling="center">Cryptocurrency Prices</Shared.Heading>
        </Shared.Header>
        <Styled.Box>
          <ReactChart />
        </Styled.Box>
      </Styled.Wrapper>
    </Shared.Section>
  )
}
