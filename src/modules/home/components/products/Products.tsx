import React from 'react'

import * as Styled from './style'
import img1 from '../../../../assets/images/1.jpg'
import img2 from '../../../../assets/images/2.jpg'
import img3 from '../../../../assets/images/3.jpg'
import img4 from '../../../../assets/images/4.jpg'
import worldmap from '../../../../assets/images/world_map.png'
import fullimg1 from '../../../../assets/images/1 (1).jpg'
import fullimg2 from '../../../../assets/images/2 (1).jpg'
import fullimg3 from '../../../../assets/images/3 (1).jpg'
import fullimg4 from '../../../../assets/images/4 (1).jpg'
import fullimg5 from '../../../../assets/images/5.jpg'

interface I_ProductList {
  img: string
  title: string
  power: { Eth: string; Zec: string }
  prize: number
}

const ProductList: I_ProductList[] = [
  {
    img: img1,
    title: 'TI-miner (High) GPU 4 Radeon RX 570',
    power: {
      Eth: ' 98 MH/s',
      Zec: '1090 Sol/s',
    },
    prize: 3500,
  },
  {
    img: img2,
    title: 'TI-miner (Low) GPU 4 nVidia GTX 1060',
    power: {
      Eth: ' 73 MH/s',
      Zec: '1080 Sol/s',
    },
    prize: 2300,
  },
  {
    img: img3,
    title: 'TI-miner (Low) GPU 4 nVidia GTX 1060',
    power: {
      Eth: ' 106 MH/s',
      Zec: '2200 Sol/s',
    },
    prize: 4750,
  },
  {
    img: img4,
    title: 'TI-miner (VIP) GPU 4 nVidia GTX 1080',
    power: {
      Eth: ' 159 MH/s',
      Zec: '3100 Sol/s',
    },
    prize: 1200,
  },
]

export const Products = () => {
  return (
    <>
      <Styled.Section paddingbottom="140px" paddingtop="140px">
        <Styled.Wrapper>
          <Styled.Header>
            <Styled.PricingText aling="center">We Sale Products</Styled.PricingText>
            <Styled.Heading aling="center">Our Equipments</Styled.Heading>
          </Styled.Header>
          <Styled.ProductsList>
            <Styled.GridBox>
              {ProductList.map((item: I_ProductList, index: number) => (
                <Styled.GridItem key={index}>
                  <Styled.Card>
                    <Styled.CardImg>
                      <img src={item.img} />
                    </Styled.CardImg>
                    <Styled.CardContent>
                      <Styled.CardTitle>{item.title}</Styled.CardTitle>
                      <Styled.CardP>
                        <strong>Power:</strong>
                      </Styled.CardP>
                      <Styled.UList>
                        <Styled.UItem>{item.power.Eth}</Styled.UItem>
                        <Styled.UItem>{item.power.Zec}</Styled.UItem>
                      </Styled.UList>
                      <Styled.Prize>$ {item.prize}</Styled.Prize>
                      <Styled.Button>Buy</Styled.Button>
                    </Styled.CardContent>
                  </Styled.Card>
                </Styled.GridItem>
              ))}
            </Styled.GridBox>
          </Styled.ProductsList>
        </Styled.Wrapper>
      </Styled.Section>

      <Styled.Section paddingtop="0px" paddingbottom="0px">
        <Styled.Wrapper>
          <Styled.GridBox2>
            <Styled.GridItem>
              <Styled.Header>
                <Styled.PricingText aling="left">SHOTS OF OUR DATA CENTER</Styled.PricingText>
                <Styled.Heading aling="left">Our Data center</Styled.Heading>
              </Styled.Header>
            </Styled.GridItem>
            <Styled.GridItem>
              <Styled.Para marginBottom="25px" marginTop="0px">
                Data center guarantees trouble-free operation of your equipment, control and monitoring for optimal
                external temperature, humidity, dust protection.
              </Styled.Para>
              <Styled.Para marginBottom="0px" marginTop="25px">
                Data center is protected from electric voltage jumps and broken internet connections. Backuping of power
                supply systems provides hours-long stable functioning of equipment in case if some force-majeure
                circumstances occurs (instability of electric power network, industrial network disconnection etc.). a
                duty engineer proceeds to remove defects/failures at once after relevant information is received.Modern
                Equipment
              </Styled.Para>
            </Styled.GridItem>
          </Styled.GridBox2>
        </Styled.Wrapper>
      </Styled.Section>
      <Styled.Gallery paddingbottom="0px" paddingtop="0px">
        <Styled.GridWrapper1>
          <Styled.GridItem paddingLeft="5px" paddingRight="5px">
            <Styled.ProductImg>
              <img src={fullimg1} />
              <Styled.Desc className="hoverIt">Modern Equipments</Styled.Desc>
            </Styled.ProductImg>
          </Styled.GridItem>
          <Styled.GridItem paddingLeft="5px" paddingRight="5px">
            <Styled.ProductImg>
              <img src={fullimg2} />
              <Styled.Desc className="hoverIt">Modern Equipments</Styled.Desc>
            </Styled.ProductImg>
          </Styled.GridItem>
        </Styled.GridWrapper1>
        <Styled.GridWrapper2>
          <Styled.GridItem paddingLeft="5px" paddingRight="5px">
            <Styled.ProductImg2>
              <img src={fullimg3} />
              <Styled.Desc className="hoverIt">Modern Equipments</Styled.Desc>
            </Styled.ProductImg2>
          </Styled.GridItem>
          <Styled.GridItem paddingLeft="5px" paddingRight="5px">
            <Styled.ProductImg2>
              <img src={fullimg4} />
              <Styled.Desc className="hoverIt">Modern Equipments</Styled.Desc>
            </Styled.ProductImg2>
          </Styled.GridItem>
          <Styled.GridItem paddingLeft="5px" paddingRight="5px">
            <Styled.ProductImg2>
              <img src={fullimg5} />
              <Styled.Desc className="hoverIt">Modern Equipments</Styled.Desc>
            </Styled.ProductImg2>
          </Styled.GridItem>
        </Styled.GridWrapper2>
      </Styled.Gallery>
      <Styled.Section paddingbottom="140px" paddingtop="140px" hasBackground={true}>
        <Styled.Wrapper>
          <Styled.Header>
            <Styled.PricingText aling="center">WE ARE IN THE WORLD</Styled.PricingText>
            <Styled.Heading aling="center" hasBackground={true}>
              We have Users all Over the World
            </Styled.Heading>
          </Styled.Header>
          <Styled.WorldImg src={worldmap} />
        </Styled.Wrapper>
      </Styled.Section>
    </>
  )
}
