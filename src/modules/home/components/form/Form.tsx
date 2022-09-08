import React from 'react'

import * as Shared from '../../../../styles/styled'
import * as Styled from './style'
import img1 from '../../../../assets/images/p1.png'
import img2 from '../../../../assets/images/p2.png'
import img3 from '../../../../assets/images/p3.png'
import img4 from '../../../../assets/images/p4.png'
import img5 from '../../../../assets/images/p5.png'
import img6 from '../../../../assets/images/p6.png'

interface I_image {
  image: string
}
const image: I_image[] = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
]

export const Form: React.FC = () => {
  return (
    <>
      <Styled.Section paddingbottom="140px" paddingtop="140px">
        <Styled.Wrapper>
          <Styled.GridBox>
            <Styled.GridItem>
              <Styled.Header>
                <Styled.PricingText aling="left">WHO HELPS US</Styled.PricingText>
                <Styled.Heading aling="left">Mining Farm Partners</Styled.Heading>
              </Styled.Header>
            </Styled.GridItem>
            <Styled.GridItem>
              <Styled.Box>
                {image.map((item: I_image, index: number) => (
                  <Styled.Card key={index}>
                    <img src={item.image} />
                  </Styled.Card>
                ))}
              </Styled.Box>
            </Styled.GridItem>
          </Styled.GridBox>
        </Styled.Wrapper>
      </Styled.Section>
      <Styled.Section hasBackground={true} paddingbottom="140px" paddingtop="140px">
        <Styled.Wrapper>
          <Styled.GridBox2>
            <Styled.GridItem>
              <Styled.Header>
                <Styled.PricingText aling="left">GET IN TOUCH</Styled.PricingText>
                <Styled.Heading aling="left" hasBackground={true}>
                  We Can Help You
                </Styled.Heading>
              </Styled.Header>
              <Styled.Para hasBackground={true} marginTop="25px" marginBottom="0px">
                Data center guarantees trouble-free operation of your equipment, control and monitoring for optimal
                external temperature, humidity, dust protection.
              </Styled.Para>
            </Styled.GridItem>
          </Styled.GridBox2>
          <Styled.GridBox3>
            <Styled.GridItem>
              <Shared.InputDiv>
                <Shared.Input placeholder="Name" type="text" />
              </Shared.InputDiv>
              <Shared.InputDiv>
                <Shared.Input placeholder="Email" type="email" />
              </Shared.InputDiv>
            </Styled.GridItem>
            <Styled.GridItem>
              <Shared.TextAreaDiv>
                <Shared.TextArea placeholder="Comment" />
              </Shared.TextAreaDiv>
              <Styled.Button>Send Message</Styled.Button>
            </Styled.GridItem>
          </Styled.GridBox3>
        </Styled.Wrapper>
      </Styled.Section>
    </>
  )
}
