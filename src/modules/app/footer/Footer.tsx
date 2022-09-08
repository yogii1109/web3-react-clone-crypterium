import React from 'react'

import * as Styled from './style'
import * as Shared from '../../../styles/styled'
import footerlogo from './../../../assets/images/footer_logo.png'

export const Footer: React.FC = () => {
  return (
    <Shared.Section hasBackground={true} paddingbottom="45px" paddingtop="140px">
      <Styled.Wrapper>
        <Styled.Grid>
          <Styled.GridItem>
            <Styled.Box>
              <Styled.FooterLogo>
                <img src={footerlogo} />
              </Styled.FooterLogo>
            </Styled.Box>
          </Styled.GridItem>
          <Styled.GridItem>
            <Styled.Box>
              <Styled.FooterTitle>Contact Information</Styled.FooterTitle>
              <Styled.FooterAddress>
                1010 Avenue of the Moon New York,
                <br />
                NY 10018 US.
                <br />
                Call Us: (066) 052 39876
                <br />
                Email: nfo@cryptonet.co <br />
              </Styled.FooterAddress>
            </Styled.Box>
          </Styled.GridItem>
          <Styled.GridItem>
            <Styled.Box>
              <Styled.FooterTitle>Main Menu</Styled.FooterTitle>
              <Styled.GridMenu>
                <Styled.Menu>
                  <Styled.MenuItem>Home</Styled.MenuItem>
                  <Styled.MenuItem>About Us</Styled.MenuItem>
                  <Styled.MenuItem>Contact Us</Styled.MenuItem>
                  <Styled.MenuItem>News</Styled.MenuItem>
                </Styled.Menu>
                <Styled.Menu>
                  <Styled.MenuItem>Events</Styled.MenuItem>
                  <Styled.MenuItem>Wallets</Styled.MenuItem>
                  <Styled.MenuItem>FAQ's</Styled.MenuItem>
                  <Styled.MenuItem>Support</Styled.MenuItem>
                </Styled.Menu>
                <Styled.Menu>
                  <Styled.MenuItem>Application Design</Styled.MenuItem>
                  <Styled.MenuItem>UI/UX Design</Styled.MenuItem>
                  <Styled.MenuItem>Web Design</Styled.MenuItem>
                  <Styled.MenuItem>Documentation</Styled.MenuItem>
                </Styled.Menu>
              </Styled.GridMenu>
            </Styled.Box>
          </Styled.GridItem>
        </Styled.Grid>
      </Styled.Wrapper>
    </Shared.Section>
  )
}
