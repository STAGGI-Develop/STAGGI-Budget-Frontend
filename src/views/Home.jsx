import { Stack } from '@chakra-ui/react'
import BalanceColumn from '../components/dashboard/BalanceColumn'
import SavingsBudgetsColumn from '../components/dashboard/SavingBudgetColumn'
import ChartColumn from '../components/dashboard/ChartColumn'

const Home = () => {
  return (
    <Stack
      h='full'
      marginX={{
        base: '1rem',
        sm: '4rem',
        md: '10rem',
        lg: '4rem',
        xl: '10rem',
      }}
      marginY='1.5rem'
      direction={{ base: 'column', lg: 'row' }}
      spacing='2rem'
      // overflow="hidden"
      // justify="flex-start"
      // align="flex-start"
    >
      <SavingsBudgetsColumn />
      <BalanceColumn />
      <ChartColumn />
      {/* <SavingsBudgets /> */}
      {/* <Balance /> */}
      {/* <Chart /> */}
    </Stack>
  )
}

export default Home
