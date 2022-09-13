import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { GiHamburgerMenu } from 'react-icons/gi'

import * as Styled from './style'
import logo from '../../../assets/images/site_logo.png'
import logo2 from '../../../assets/images/site_logo_2sidebar.png'
import { flagList, I_FlagIcon } from './utils'
import { homeOptions, pageOptions } from './utils'
import DropDown from '../../../shared/dropDown/DropDown'
import { colors } from '../../../styles/theme'
import { CgClose } from 'react-icons/cg'

interface I_Navigation {
  sideBarActive: boolean
  setSideBarActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navigation: React.FC<I_Navigation> = (props) => {
  const { sideBarActive, setSideBarActive } = props
  const [activeFlag, setActiveFlag] = useState<I_FlagIcon>(flagList[0])
  const [selectflag, setSelectFlag] = useState<boolean>(false)

  return (
    <>
      <Styled.NavHeader sideBarActive={sideBarActive}>
        <Styled.FlexBox>
          <Styled.Logo>{sideBarActive ? <img src={logo2} /> : <img src={logo} />}</Styled.Logo>
          <Styled.Navigation>
            <Styled.NavItem active={true} hasDropDown={true}>
              Home{' '}
              <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginLeft: '5px' }, size: '12px' }}>
                <>
                  <AiOutlineDown />
                </>
              </IconContext.Provider>
              <Styled.HoverEffect className="hoverIt">
                <DropDown top="34px" options={homeOptions} />
              </Styled.HoverEffect>
            </Styled.NavItem>
            <Styled.NavItem hasDropDown={true}>
              Pages{' '}
              <IconContext.Provider value={{ style: { verticalAlign: 'middle', marginLeft: '5px' }, size: '12px' }}>
                <>
                  <AiOutlineDown />
                </>
              </IconContext.Provider>
              <Styled.HoverEffect className="hoverIt">
                <DropDown top="34px" options={pageOptions} />
              </Styled.HoverEffect>
            </Styled.NavItem>
            <Styled.NavItem>White Papers</Styled.NavItem>
            <Styled.NavItem>FAQ's</Styled.NavItem>
            <Styled.NavItem>Support</Styled.NavItem>
          </Styled.Navigation>
          <Styled.NavButtons>
            <Styled.Login>Login</Styled.Login>
            <Styled.SignUp>Sign up</Styled.SignUp>
            <Styled.FlagDiv>
              <Styled.ColorDiv active={selectflag}>
                <Styled.Flag onClick={() => setSelectFlag((prev) => !prev)}>
                  <img src={activeFlag.icon} />
                </Styled.Flag>
              </Styled.ColorDiv>
              <Styled.FlagList active={selectflag}>
                {flagList
                  .filter((item: I_FlagIcon) => item.id !== activeFlag.id)
                  .map((item: I_FlagIcon) => (
                    <Styled.Flag
                      key={item.id}
                      onClick={() => {
                        setActiveFlag(item)
                        setSelectFlag(false)
                      }}
                    >
                      <img src={item.icon} />
                    </Styled.Flag>
                  ))}
              </Styled.FlagList>
            </Styled.FlagDiv>
          </Styled.NavButtons>
          <Styled.SideMenu
            onClick={() => {
              setSideBarActive((prev) => !prev)
            }}
          >
            <IconContext.Provider
              value={{
                style: { verticalAlign: 'middle', color: `${sideBarActive ? '' : colors.white}`, marginLeft: '5px' },
                size: '24px',
              }}
            >
              {sideBarActive ? <CgClose /> : <GiHamburgerMenu />}
            </IconContext.Provider>
          </Styled.SideMenu>
        </Styled.FlexBox>
      </Styled.NavHeader>
    </>
  )
}
