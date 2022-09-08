import React from 'react'

import * as Styled from './style'
import * as Shared from '../../../../styles/styled'
import { ServiceCard } from '../../../../shared/servicecard/ServiceCard'
import { ServiceInfo, I_ServiceInfo } from './util'

export const NewCardCarousel: React.FC = () => {
  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    paueOnHover: true,
    className: 'center',
    responsive: [
      {
        breakpoint: 560,
        settings: {
          centerMode: true,
          centerPadding: `20%`,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Styled.StyledSlider {...settings}>
      {ServiceInfo.map((item: I_ServiceInfo, index: number) => (
        <div key={index}>
          <ServiceCard item={item} />
        </div>
      ))}
    </Styled.StyledSlider>
  )
}

export const ServiceCarousel: React.FC = () => {
  return (
    <Shared.Section hasBackground={true} paddingtop="140px" paddingbottom="140px">
      <Styled.Wrapper>
        <Styled.GridItem>
          <Shared.Header>
            <Shared.PricingText aling="left">CRYPTERIUM STRONG SIZE</Shared.PricingText>
            <Shared.Heading aling="left" hasBackground={true}>
              Why choose Crypto Mining Farm?
            </Shared.Heading>
          </Shared.Header>
          <Shared.Para marginTop="25px" marginBottom="0px" hasBackground={true}>
            It is also used in server-side network programming with runtime environments such as Node.js, game
            development and the creation of desktop and mobile applications.
          </Shared.Para>
        </Styled.GridItem>
        {/* <Styled.GridItem  marginLeft='8.33%'>
                    <NewCardCarousel/>
                </Styled.GridItem> */}
      </Styled.Wrapper>
    </Shared.Section>
  )
}
