import React from 'react'
import { IconContext } from 'react-icons'
import { RiDoubleQuotesL } from 'react-icons/ri'

import bgImage from '../../../../assets/images/review_bgImage.jpg'
import { Para } from '../../../../shared/paragraph/Para'
import { colors } from '../../../../styles/theme'
import * as Styled from './style'

export const NewCardCarousel: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }
  return (
    <div style={{ width: '100%' }}>
      <Styled.StyledSlider {...settings}>
        <Styled.Card>
          <Para marginTop="0px" marginBottom="25px" />
          <Para marginTop="25px" marginBottom="0px" />
          <Styled.Author>
            <Styled.AuthorName>Joseph Allan</Styled.AuthorName>
            <Styled.Post>CEO Silver Development</Styled.Post>
          </Styled.Author>
        </Styled.Card>
      </Styled.StyledSlider>
    </div>
  )
}

export const Review: React.FC = () => {
  return (
    <Styled.Section paddingbottom="140px" paddingtop="140px">
      <Styled.BgImage src={bgImage} />
      <Styled.Wrapper>
        <Styled.GridBox>
          <Styled.GrdItem>
            <IconContext.Provider value={{ style: { marginBottom: '30px' }, color: `${colors.white}`, size: '70px' }}>
              <>
                <RiDoubleQuotesL />
              </>
            </IconContext.Provider>
          </Styled.GrdItem>
          <Styled.GrdItem>
            <Styled.Card>
              <Para marginTop="0px" marginBottom="25px" />
              <Para marginTop="25px" marginBottom="0px" />
              <Styled.Author>
                <Styled.AuthorName>Joseph Allan</Styled.AuthorName>
                <Styled.Post>CEO Silver Development</Styled.Post>
              </Styled.Author>
            </Styled.Card>
          </Styled.GrdItem>
        </Styled.GridBox>
      </Styled.Wrapper>
    </Styled.Section>
  )
}
