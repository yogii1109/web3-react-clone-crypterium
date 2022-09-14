import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { colors } from '../../styles/theme'

const ReactChart: React.FC = () => {
  const chartData = {
    series: [
      {
        name: 'Bitcoin',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Ethereum',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: 'gradient',
      },
      color: [`${colors.graphlightblue}`, `${colors.graphlightgreen}`],
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'Month',
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
    },
  }

  return <Chart options={chartData.options} series={chartData.series} />
}

export default ReactChart
