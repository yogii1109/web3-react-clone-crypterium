import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { useWindowSize } from '../../../../shared/hooks/useWidth'
import bgimage from '../../../../assets/images/bg_image.png'
import * as Styled from './style'
import * as Shared from '../../../../styles/styled'
import { newsblock, I_NewsCard } from './utils'
import { NewsCard } from '../../../../shared/newscard/NewsCard'

export const NewCardCarousel: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    className: 'center',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div style={{ width: '100%' }}>
      <Styled.StyledSlider {...settings}>
        <NewsCard content={newsblock[0]} />
        <NewsCard content={newsblock[1]} />
        <NewsCard content={newsblock[2]} />
        <NewsCard content={newsblock[3]} />
        <NewsCard content={newsblock[0]} />
        <NewsCard content={newsblock[1]} />
        <NewsCard content={newsblock[2]} />
        <NewsCard content={newsblock[3]} />
      </Styled.StyledSlider>
    </div>
  )
}

export const News: React.FC = () => {
  return (
    <Styled.Section paddingtop="140px" paddingbottom="140px" hasBackground={true}>
      <Shared.Header>
        <Shared.Heading aling="center">Latest News & Blog</Shared.Heading>
      </Shared.Header>
      <Styled.CarouselContainer>
        <NewCardCarousel />
      </Styled.CarouselContainer>
    </Styled.Section>
  )
}
