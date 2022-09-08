import { BiUnderline } from 'react-icons/bi'
import styled from 'styled-components'
import { I_Option } from '../../../shared/dropDown/DropDown'
import { colors, screenSizes } from '../../../styles/theme'

export const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.white};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface I_Wrapper {
  dropDownActive?: number | null
}
export const Wrapper = styled.div<I_Wrapper>`
  position: ${(props) => (props.dropDownActive?.valueOf() === undefined ? '' : 'absolute')};
  top: ${(props) => (props.dropDownActive?.valueOf() === undefined ? '' : '80px')};
`

export const FlexBox = styled.div<I_Wrapper>`
  /* position: absolute; */
  /* top: 80px; */
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  width: 200px;
`

interface I_BoxOption {
  hasDropDown: boolean
}
export const BoxOption = styled.div<I_BoxOption>`
  color: ${colors.spaceGrey};
  margin-top: 20px;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
    text-decoration: underline;
    text-decoration-color: ${colors.lightgreen};
    text-underline-offset: 8px;
    text-decoration-thickness: 2px;
  }
`
export const NavButtons = styled.ul`
  margin-top: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`

export const Login = styled.li`
  margin-right: 20px;
  color: ${colors.white};
  padding: 8px 30px;
  border-radius: 30px;
  background-color: ${colors.lightgreen};
  border: none;
  cursor: pointer;
  font-size: 14px;
`

export const SignUp = styled.li`
  margin-right: 20px;
  color: ${colors.spaceGrey};
  text-decoration: underline;
  font-size: 14px;
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
export const Options = styled.div`
  padding-left: 20px;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
`

export const homeOptions: I_Option[] = [
  {
    option: 'Home Page',
    active: true,
  },
  {
    option: 'Home Slider',
    active: true,
  },
  {
    option: 'Agency',
    active: true,
  },
  {
    option: 'Landing Wallet',
    active: true,
  },
  {
    option: 'Landing ICO1',
    active: true,
  },
  {
    option: 'Landing ICO2',
    active: true,
  },
  {
    option: 'Landing ICO3',
    active: true,
  },
  {
    option: 'Landing ICO4',
    active: true,
  },
  {
    option: 'Minting Farm',
    active: false,
  },
]

export const pageOptions: I_Option[] = [
  {
    option: 'About',
    active: true,
  },
  {
    option: 'Services',
    active: true,
  },
  {
    option: 'Blog',
    active: true,
  },
  {
    option: 'Blog Massonary',
    active: true,
  },
  {
    option: 'Blog Post',
    active: true,
  },
  {
    option: 'Pricing Tables',
    active: true,
  },
  {
    option: 'Typography',
    active: true,
  },
  {
    option: '404 Page',
    active: true,
  },
  {
    option: 'Widgets',
    active: true,
  },
  {
    option: 'Contact',
    active: true,
  },
  {
    option: 'Sign In',
    active: true,
  },
  {
    option: 'Sign Up',
    active: true,
  },
]

export interface I_Options {
  option: string
  dropDown: boolean
}
export const Menu: I_Options[] = [
  {
    option: 'Home',
    dropDown: true,
  },
  {
    option: 'Pages',
    dropDown: true,
  },
  {
    option: "White Paper's",
    dropDown: false,
  },
  {
    option: "FAQ's",
    dropDown: false,
  },
  {
    option: 'Support',
    dropDown: false,
  },
]
