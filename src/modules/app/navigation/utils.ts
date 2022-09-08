import flag1 from '../../../assets/images/1.png'
import flag2 from '../../../assets/images/2.png'
import flag3 from '../../../assets/images/3.png'
import flag4 from '../../../assets/images/4.png'
import { I_Option } from '../../../shared/dropDown/DropDown'

export interface I_FlagIcon {
  id: number
  icon: string
}

export const flagList: I_FlagIcon[] = [
  {
    id: 1,
    icon: flag1,
  },
  {
    id: 2,
    icon: flag2,
  },
  {
    id: 3,
    icon: flag3,
  },
  {
    id: 4,
    icon: flag4,
  },
]

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
