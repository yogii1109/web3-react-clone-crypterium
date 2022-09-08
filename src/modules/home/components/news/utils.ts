export interface I_NewsCard {
  id: number
  category: string
  title: string
  para: string
  date: string
}

export const newsblock: I_NewsCard[] = [
  {
    id: 1,
    category: 'BlockChain',
    title: 'Start the redemption before the ICO completion',
    para: ' Lh-Crypto project buys 10% of the total amount of LHC tokens sold at a double rate. Thus, even now, project investors can receive an ',
    date: 'September, 15 2017',
  },
  {
    id: 2,
    category: 'Cryptocurrency',
    title: 'New trends in UI/UX Design World Integration',
    para: 'Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of ',
    date: 'September, 15 2017',
  },
  {
    id: 3,
    category: 'Bitcoin',
    title: 'The LH-Crypto project has reached $7 000 000!',
    para: 'The meetings will take place in the following cities: 15 January – Milan, 16 January – Lugano, 17 January – Zurich, 18 Jan',
    date: 'September, 15 2017',
  },
  {
    id: 4,
    category: 'ICO',
    title: 'Crypto project has reached NormalCap!',
    para: ' Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  ',
    date: 'September, 15 2017',
  },
]
