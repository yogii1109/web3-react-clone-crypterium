import React from 'react'

import * as Styled from './style'
import img1 from '../../../../assets/images/7_1.png'
import img2 from '../../../../assets/images/2_1.png'
import img3 from '../../../../assets/images/3_1.png'
import img4 from '../../../../assets/images/4_1.png'
import img5 from '../../../../assets/images/6_1.png'
import img6 from '../../../../assets/images/8_1.png'

interface I_Advantage {
  image: string
  heading: string
  description: string
}

const advantagesList: I_Advantage[] = [
  {
    image: img1,
    heading: 'Mining Farms constructions',
    description:
      'Hoki lamprey Japanese eel; loach catfish deep sea bonefish long-finned pike finback cat shark gunnel. Shiner eel cod striped bass',
  },
  {
    image: img2,
    heading: 'Warranty from 1 to 5 years',
    description:
      'Jack California flyingfish Devario walleye french angelfish red snapper; ghoul: sea raven. Barreleye slipmouth yellowfin grouper',
  },
  {
    image: img3,
    heading: 'Secure Storage',
    description:
      'Whitebait Pacific viperfish, grideye boafish Canthigaster rostrata brook lamprey, rock cod Billfish, brook lamprey collared',
  },
  {
    image: img4,
    heading: 'Cryptocurrency Exchange',
    description:
      'Yellow moray, Reedfish sergeant major. Blue-redstripe danio kappy Sevan trout crocodile icefish collared carpetshark.',
  },
  {
    image: img5,
    heading: 'Safety and transparency',
    description:
      'Weatherfish dragon goby mullet Bengal danio long-whiskered catfish gray mullet boga prickly shark banjo catfish.',
  },
  {
    image: img6,
    heading: 'Multicurrency Wallet',
    description:
      'Dolly Varden trout sturgeon, morwong houndshark. Mooneye bobtail snipe eel bichir slimy sculpin armorhead catfish',
  },
]

export const Advantages = () => {
  return (
    <Styled.Section>
      <Styled.Wrapper>
        <Styled.Header>
          <Styled.PricingText>Meet the Product</Styled.PricingText>
          <Styled.Heading>Advantages</Styled.Heading>
        </Styled.Header>
        <Styled.ListGridView>
          {advantagesList.map((item: I_Advantage, index: number) => (
            <Styled.GridItem key={index}>
              <Styled.Card>
                <Styled.CardImg>
                  <img src={item.image} />
                </Styled.CardImg>
                <Styled.CardHeading>{item.heading}</Styled.CardHeading>
                <Styled.CardDescription>{item.description}</Styled.CardDescription>
              </Styled.Card>
            </Styled.GridItem>
          ))}
        </Styled.ListGridView>
      </Styled.Wrapper>
    </Styled.Section>
  )
}
