import React from 'react'

import protectionicon from '../../assets/images/protection.png'
import { I_ServiceInfo } from '../../modules/home/components/servicecarousel/util'
import * as Styled from './style'

interface I_Props {
  item: I_ServiceInfo
}

export const ServiceCard: React.FC<I_Props> = ({ item }) => {
  return (
    <Styled.CardWrapper>
      <Styled.Card backgroundColor={item.color}>
        <Styled.Content>
          <Styled.CardIcon>
            <img src={item.icon} />
          </Styled.CardIcon>
          <Styled.Title>{item.title}</Styled.Title>
          <Styled.Para>{item.para}</Styled.Para>
        </Styled.Content>
      </Styled.Card>
    </Styled.CardWrapper>
  )
}
