import { Stack } from '@chakra-ui/react'
import BalanceColumn from '../components/dashboard/BalanceColumn'
import SavingsBudgetsColumn from '../components/dashboard/SavingBudgetColumn'
import ChartColumn from '../components/dashboard/ChartColumn'

const Home = () => {
  return (
    <Stack
      h='full'
      paddingX={{
        base: '1rem',
        sm: '4rem',
        md: '10rem',
        lg: '4rem',
        xl: '6rem',
      }}
      marginX='auto'
      maxW='1800px'
      overflow='hidden'
      marginY='1.5rem'
      direction={{ base: 'column', lg: 'row' }}
      justify='center'
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
