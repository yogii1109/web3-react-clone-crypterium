import React, { useState } from 'react'

import { Pricing, I_Pricing } from './utlis'
import * as Styled from './style'
import bitcoinlogo from '../../../../assets/images/bitcoinlogo.png'
import icomonero from '../../../../assets/images/ico_monero.png'
import icoripple from '../../../../assets/images/ico_ripple.png'

type navType = 'BTC' | 'MON' | 'RIPPLE'

export const PricingPlan: React.FC = () => {
  const [navToggle, setNavToggle] = useState<navType>('BTC')

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Header>
          <Styled.PricingText>Pricing Plan</Styled.PricingText>
          <Styled.Heading>
            Crypto Mining Farm <br />
            Pricing Plans
          </Styled.Heading>
        </Styled.Header>
        <Styled.PricingTab>
          <Styled.TabContainer>
            <Styled.TabNavBar>
              <Styled.NavItem
                onClick={() => {
                  setNavToggle('BTC')
                }}
              >
                <Styled.NavImg src={bitcoinlogo} active={'BTC' === navToggle} />
                <Styled.NavText active={'BTC' === navToggle}>Bitcoin</Styled.NavText>
              </Styled.NavItem>
              <Styled.NavItem
                onClick={() => {
                  setNavToggle('MON')
                }}
              >
                <Styled.NavImg src={icomonero} active={'MON' === navToggle} />
                <Styled.NavText active={'MON' === navToggle}>Monero</Styled.NavText>
              </Styled.NavItem>
              <Styled.NavItem
                onClick={() => {
                  setNavToggle('RIPPLE')
                }}
              >
                <Styled.NavImg src={icoripple} active={'RIPPLE' === navToggle} />
                <Styled.NavText active={'RIPPLE' === navToggle}>Ripple</Styled.NavText>
              </Styled.NavItem>
            </Styled.TabNavBar>
          </Styled.TabContainer>
        </Styled.PricingTab>
        <Styled.GridBox>
          {Pricing.map((item: I_Pricing, index: number) => (
            <Styled.GridItem key={index}>
              <Styled.PriceHeader>
                <Styled.PriceHeading>{item.plan}</Styled.PriceHeading>
                <Styled.Price>{item.price}</Styled.Price>
              </Styled.PriceHeader>
              <Styled.DescList>
                <Styled.ListItem active={false}>
                  <Styled.Speed>
                    {item.speed}
                    <br />
                  </Styled.Speed>
                  <Styled.Note>{item.setup}</Styled.Note>
                </Styled.ListItem>
                <Styled.ListItem active={true}>
                  <Styled.ListType>
                    Maintenance Fees per <br /> GH/s/day
                    <br />
                  </Styled.ListType>
                  <Styled.ItemValue>{item.maintainance}</Styled.ItemValue>
                </Styled.ListItem>
                <Styled.ListItem active={true}>
                  <Styled.ListType>
                    Contract Duration
                    <br />
                  </Styled.ListType>
                  <Styled.ItemValue>{item.contract}</Styled.ItemValue>
                </Styled.ListItem>
              </Styled.DescList>
              <Styled.CustomButton>Get Started</Styled.CustomButton>
            </Styled.GridItem>
          ))}
        </Styled.GridBox>
      </Styled.Wrapper>
    </Styled.Container>
  )
}
