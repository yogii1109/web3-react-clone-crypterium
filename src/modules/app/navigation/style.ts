import styled from 'styled-components'
import { colors, screenSizes } from '../../../styles/theme'

export const NavHeader = styled.header`
  background-color: transparent;

  z-index: 1;
  @media (min-width: ${screenSizes.L}px) {
    padding-top: 50px;
    padding: 15px;
  }
  @media (min-width: ${screenSizes.XXL}px) {
    padding-left: 70px;
    padding-right: 70px;
  }
`

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  height: 42px;
  width: 175px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const Navigation = styled.nav`
  list-style: none;
  display: inline-flex;

  @media (max-width: ${screenSizes.L}px) {
    display: none;
  }
`

interface I_NavProps {
  active?: boolean
  hasDropDown?: boolean
}

export const NavItem = styled.li<I_NavProps>`
  position: ${(props) => (props.hasDropDown ? 'relative' : '')};
  color: ${colors.white};
  font-size: 18px;
  cursor: pointer;
  text-underline-offset: 6px;
  text-decoration: ${(props) => (props.active?.valueOf() ? 'underline' : '')};
  text-decoration-thickness: 2px;
  .hoverIt {
    display: none;
  }
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    .hoverIt {
      display: block;
    }
  }
  @media (min-width: ${screenSizes.L}px) {
    margin-left: 30px;
  }
  @media (min-width: ${screenSizes.XXL}px) {
    margin-left: 40px;
  }
`

export const NavButtons = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  @media (max-width: ${screenSizes.L}px) {
    display: none;
  }
`

export const Login = styled.li`
  margin-right: 20px;
  color: ${colors.white};
  padding: 8px 30px;
  border-radius: 30px;
  background-color: ${colors.lightgreen};
  border: none;
  cursor: pointer;
`

export const SignUp = styled.a`
  margin-right: 20px;
  color: ${colors.white};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

export const Flag = styled.div`
  height: 33px;
  width: 33px;
  cursor: pointer;
  border-radius: 50%;
  border: 4px solid ${colors.navyblue};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
export const HoverEffect = styled.div``
interface I_FlagList {
  active?: boolean
}

export const FlagList = styled.div<I_FlagList>`
  display: ${(props) => (props.active?.valueOf() ? 'block' : 'none')};
  position: ${(props) => (props.active?.valueOf() ? 'absolute' : '')};
  width: 33px;
  background-color: ${colors.navyblue};
  border-end-end-radius: 30px;
  border-bottom-left-radius: 30px;
`

export const FlagDiv = styled.div`
  position: relative;
`

export const ColorDiv = styled.div<I_FlagList>`
  background-color: ${(props) => (props.active?.valueOf() === false ? '' : `${colors.navyblue}`)};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`
