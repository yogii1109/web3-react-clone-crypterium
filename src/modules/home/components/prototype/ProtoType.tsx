import React from 'react'
import { ListItem } from '../pricingplan/style'

import * as Styled from './style'
import img10 from '../../../../assets/images/img_10.png'
import img11 from '../../../../assets/images/img_11.png'
import backgroundimg from '../../../../assets/images/video_card_small.png'
import * as Shared from '../../../../styles/styled'

interface I_ListItem {
  item: string
}

const List: I_ListItem[] = [
  {
    item: '6 months of free allocation in data center',
  },
  {
    item: '6 months of warranty service',
  },
  {
    item: '6 months of 24/7 technical support',
  },
  {
    item: '6 months without no expenses on electricity',
  },
]

export const ProtoType = () => {
  return (
    <>
      <Styled.Section hasBackground={true} paddingtop="140px" paddingbottom="140px">
        <Styled.Wrapper reverse={true}>
          <Styled.LeftBox>
            <Styled.Header>
              <Styled.Box>
                <Styled.SmallHeading>equipments</Styled.SmallHeading>
                <Styled.Heading>Upon purchase of TI-miner (Top) GPU 4 Radeon RX 470</Styled.Heading>
              </Styled.Box>
            </Styled.Header>
            <Styled.Content>
              <Styled.List>
                {List.map((item: I_ListItem, index: number) => (
                  <Styled.ListItem key={index}>{item.item}</Styled.ListItem>
                ))}
              </Styled.List>
            </Styled.Content>
          </Styled.LeftBox>
        </Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.ImgPlace>
            <img src={backgroundimg} />
          </Styled.ImgPlace>
        </Styled.ImgContainer>
      </Styled.Section>
      <Styled.Section hasBackground={false} paddingtop="140px" paddingbottom="0px">
        <Styled.Wrapper>
          <Styled.LeftBox>
            <Styled.Box>
              <img src={img10} />
            </Styled.Box>
          </Styled.LeftBox>
          <Styled.Box>
            <Styled.Header>
              <Styled.SmallHeading>OUR MISSION</Styled.SmallHeading>
              <Styled.Heading>Start Bitcoin Miningwith Three Simple Steps</Styled.Heading>
            </Styled.Header>
            <Styled.Para>
              JavaScript is also used in environments that aren’t web-based, such as PDF documents, site-specific
              browsers, and desktop widgets.
            </Styled.Para>
          </Styled.Box>
          <Styled.RightBox></Styled.RightBox>
        </Styled.Wrapper>
      </Styled.Section>
      <Styled.Section hasBackground={false} paddingtop="0px" paddingbottom="140px">
        <Styled.Wrapper reverse={true} flex={true}>
          <Styled.LeftBox flex={true}>
            <Styled.Box boxmargin={true}>
              <Styled.Header>
                <Styled.Heading>Power & Modern Mining Equipment</Styled.Heading>
              </Styled.Header>
              <Styled.Para>
                JavaScript is a prototype-based scripting language with dynamic typing and first-class functions. This
                mix of features makes it a multi-paradigm language, supporting object-oriented, imperative, and
                functional programming styles.
              </Styled.Para>
              <Shared.ShowMoreA>
                <Shared.Btn>Discover</Shared.Btn>
              </Shared.ShowMoreA>
            </Styled.Box>
          </Styled.LeftBox>
          <Styled.RightBox>
            <Styled.Box>
              <img src={img11} />
            </Styled.Box>
          </Styled.RightBox>
        </Styled.Wrapper>
      </Styled.Section>
    </>
  )
}
