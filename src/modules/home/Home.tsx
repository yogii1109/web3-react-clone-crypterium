import { BsPlayCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { lazy, Suspense, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { withTheme, ThemeProps } from 'styled-components'
import * as Styled from './style'
import { PricingPlan } from './components/pricingplan/PricingPlan'
import { ProtoType } from './components/prototype/ProtoType'
import { Advantages } from './components/advantages/Advantages'
import { Products } from './components/products/Products'
import { FAQ } from './components/faq/FAQ'
import { Form } from './components/form/Form'
import { ServiceCarousel } from './components/servicecarousel/ServiceCarousel'
import { Graph } from './components/graph/Graph'
import { News } from './components/news/News'
import { Footer } from '../app/footer/Footer'
import { Review } from './components/review/Review'
import { Navigation } from '../app/navigation/Navigation'
import { SideBar } from '../app/sidebar/SideBar'
import { About } from './components/about/About'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const [sideBarActive, setSideBarActive] = useState<boolean>(false)
  const [miners, setMiners] = useState<number>(0)
  const [people, setPeople] = useState<number>(0)

  const { ref, inView, entry } = useInView({
    threshold: 0.01,
  })

  useEffect(() => {
    let duration = 1000
    let count1 = 0
    let count2 = 0
    let counter1 = setInterval(function () {
      setMiners((prev) => prev + 1)
      count1 += 1
      if (count1 == 20) {
        clearInterval(counter1)
      }
    }, duration / 20)

    let counter2 = setInterval(function () {
      setPeople((prev) => prev + 1)
      count2 += 1
      if (count2 == 25) {
        clearInterval(counter2)
      }
    }, duration / 25)
  }, [])

  return (
    <>
      <Styled.Div>
        <Navigation sideBarActive={sideBarActive} setSideBarActive={setSideBarActive} />
        {sideBarActive && <SideBar />}
        <Styled.HeadingBlock>
          <Styled.Container>
            <Styled.Screen1>
              <Styled.GridBox>
                <Styled.Column>
                  <Styled.Heading>Mining Cryptofarm</Styled.Heading>
                  <Styled.Content>
                    <Styled.Para>
                      Crypterium is the world’s most popular away to buy and sell bitcoin, ethereum, and litecoin
                    </Styled.Para>
                    <Styled.ButtonsGroup>
                      <Styled.ButtonWrapper>
                        <Styled.Button>Start Mining</Styled.Button>
                      </Styled.ButtonWrapper>
                      <Styled.ButtonWrapper>
                        <Styled.VideoBtn>
                          <IconContext.Provider value={{ style: { marginRight: '10px' }, size: '45px' }}>
                            <>
                              <BsPlayCircle />
                            </>
                          </IconContext.Provider>
                          <Styled.BtnText> Video Presentation</Styled.BtnText>
                        </Styled.VideoBtn>
                      </Styled.ButtonWrapper>
                    </Styled.ButtonsGroup>
                    <Styled.TextGroup>
                      <Styled.Box>
                        <Styled.Number>
                          ${miners}.0M
                          <br />
                        </Styled.Number>
                        <Styled.Text>Mined by Crypterium</Styled.Text>
                      </Styled.Box>
                      <Styled.Box>
                        <Styled.Number>
                          {people}.000
                          <br />
                        </Styled.Number>
                        <Styled.Text>Used People</Styled.Text>
                      </Styled.Box>
                    </Styled.TextGroup>
                  </Styled.Content>
                </Styled.Column>
              </Styled.GridBox>
            </Styled.Screen1>
          </Styled.Container>
        </Styled.HeadingBlock>
      </Styled.Div>
      {!sideBarActive && (
        <>
          <About />
          <PricingPlan />
          <ProtoType />
          <ServiceCarousel />
          <Advantages />
          <Graph />
          <Products />
          <FAQ />
          <News />
          <Review />
          <Form />
          <Footer />
        </>
      )}
    </>
  )
})
