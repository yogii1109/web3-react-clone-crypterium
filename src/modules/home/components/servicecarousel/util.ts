import secureicon from '../../../../assets/images/secure_storage.png'
import mobileicon from '../../../../assets/images/mobile_app.png'
import protectionicon from '../../../../assets/images/protection.png'

export interface I_ServiceInfo {
  icon: string
  title: string
  para: string
  color: string
}

export const ServiceInfo: I_ServiceInfo[] = [
  {
    icon: secureicon,
    title: 'Secure Storage',
    para: 'We store the vast majority of the digital assets in secure offline storage.',
    color: 'leafgreen',
  },
  {
    icon: mobileicon,
    title: 'Mobile App',
    para: 'Our popular wallet works on your Android or iPhone in addition to your web browser.',
    color: 'purple',
  },
  {
    icon: protectionicon,
    title: 'Protection',
    para: 'Digital currency stored on our servers is covered by our insurance policy.',
    color: 'darkBlue',
  },
  {
    icon: secureicon,
    title: 'Secure Storage',
    para: 'We store the vast majority of the digital assets in secure offline storage.',
    color: 'leafgreen',
  },
  {
    icon: mobileicon,
    title: 'Mobile App',
    para: 'Our popular wallet works on your Android or iPhone in addition to your web browser.',
    color: 'purple',
  },
  {
    icon: protectionicon,
    title: 'Protection',
    para: 'Digital currency stored on our servers is covered by our insurance policy.',
    color: 'darkBlue',
  },
]
