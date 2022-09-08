import React from 'react'
import { I_NewsCard } from '../../modules/home/components/news/utils'

import * as Styled from './style'

interface I_Card {
  content: I_NewsCard
}

export const NewsCard: React.FC<I_Card> = ({ content }) => {
  const { category, title, para, date } = content
  return (
    <Styled.CarouselCard>
      <Styled.CardCategory>{category}</Styled.CardCategory>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardText>{para}</Styled.CardText>
      <Styled.CardDate>{date}</Styled.CardDate>
    </Styled.CarouselCard>
  )
}
