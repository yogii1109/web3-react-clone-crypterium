import { BsPlayCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons'

import { withTheme, ThemeProps } from 'styled-components'
import * as Styled from './style'
import { NavigationCheck } from '../app/navigationcheck/NavigationCheck'
import { About } from './components/about/About'
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

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  return (
    <>
      <Styled.Div>
        <NavigationCheck />
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
                          $20.0M
                          <br />
                        </Styled.Number>
                        <Styled.Text>Mined by Crypterium</Styled.Text>
                      </Styled.Box>
                      <Styled.Box>
                        <Styled.Number>
                          25.000
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
      <About />
      <PricingPlan />
      <ProtoType />
      <ServiceCarousel />
      <Advantages />
      {/* <Graph/> */}
      <Products />
      <FAQ />
      <News />
      <Review />
      <Form />
      <Footer />
    </>
  )
})
