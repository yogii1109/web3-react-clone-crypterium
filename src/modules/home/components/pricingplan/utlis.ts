export interface I_Pricing {
  plan: string
  price: string
  speed: string
  setup: string
  maintainance: string
  contract: string
  color: string
}

export const Pricing: I_Pricing[] = [
  {
    plan: 'Basic',
    price: 'Free',
    speed: '0.5KH/s',
    setup: 'Free Setup',
    maintainance: '$0.299',
    contract: '24 Months',
    color: 'darkBlue',
  },
  {
    plan: 'Standard',
    price: '9.99$',
    speed: '0.5KH/s',
    setup: 'Free Setup',
    maintainance: '$0.299',
    contract: '24 Months',
    color: 'purple',
  },
  {
    plan: 'Optima',
    price: '29.99$',
    speed: '0.5KH/s',
    setup: 'Free Setup',
    maintainance: '$0.299',
    contract: '24 Months',
    color: 'leafgreen',
  },
  {
    plan: 'Premium',
    price: '199.99$',
    speed: '0.5KH/s',
    setup: 'Free Setup',
    maintainance: '$0.299',
    contract: '24 Months',
    color: 'red',
  },
]
