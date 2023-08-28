import { useState } from 'react'
import ContentLayout from '../components/layouts/ContentLayout'
import { useInput } from '../hooks'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { apiTransaction } from '../utils/apiCalls'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { TransactionsTable } from '../components/dashboard/BalanceColumn'

const leftContent = ({
  searchValue,
  type,
  setType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <Stack display='grid' justifyContent='center' w='100%'>
      <Text my='1rem' textStyle='cardHeader' color='gray.500'>
        Filter transactions
      </Text>
      <Stack display='grid' gap='1.75rem'>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            {...searchValue}
            placeholder='Vacation'
            borderWidth={0}
            borderRadius={0}
            borderBottomWidth='3px'
            boxShadow='none'
            px={0}
            _focusVisible={{ borderWidth: 0, borderBottomWidth: '3px' }}
            _empty={{ borderColor: 'pink.500' }}
            _hover={{ borderColor: 'gray.200' }}
          />
        </FormControl>
        <Stack flexDirection='row' gap='1rem'>
          <FormControl>
            <FormLabel>Start date</FormLabel>
            <input
              type='date'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              style={{ paddingInline: 8, paddingBlock: 12, borderRadius: 10 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>End date</FormLabel>
            <input
              type='date'
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              style={{ paddingInline: 8, paddingBlock: 12, borderRadius: 10 }}
            />
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>Type</FormLabel>
          <Select
            variant='flushed'
            borderBottomWidth='3px'
            borderColor='pink.500'
            _hover={{ borderColor: 'gray.200' }}
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value='all'>all</option>
            <option value='in'>income</option>
            <option value='out'>outcome</option>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  )
}

const rightContent = ({ transactions, isLoading }) => {
  if (isLoading) {
    return (
      <Stack
        w='full'
        h='auto'
        direction='column'
        layerStyle='card'
        spacing='0rem'
        align='center'
      >
        <Text my='1rem' textStyle='cardHeader' color='gray.500'>
          Transactions
        </Text>
        <Spinner
          margin='1.5rem'
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.100'
          color='pink.500'
          size='xl'
        />
      </Stack>
    )
  }
  return (
    <Stack display='grid' justifyContent='center' w='100%'>
      <Stack>
        <Text my='1rem' textStyle='cardHeader' color='gray.500'>
          Transactions
        </Text>
      </Stack>
      <TransactionsTable
        item={transactions.data}
        size={{ base: 'md', xl: 'lg' }}
      />
    </Stack>
  )
}

const Search = () => {
  const { reset, touched, ...searchValue } = useInput('text')
  const [type, setType] = useState('all')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [query, setQuery] = useState('')

  const { data: transactions, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => apiTransaction.getFiltered(query),
  })

  useEffect(() => {
    const searchFilters = {}
    searchValue.value && (searchFilters.title = searchValue.value)
    searchFilters.type = type
    startDate && (searchFilters.start = new Date(startDate).toISOString())
    endDate && (searchFilters.end = new Date(endDate).toISOString())

    const result = Object.entries(searchFilters)
      .map(subArr => subArr.join('='))
      .join('&')

    console.log(result)
    setQuery(result)
  }, [searchValue.value, type, startDate, endDate])

  console.log(query)

  return (
    <>
      <ContentLayout
        leftContent={leftContent}
        leftContentProps={{
          searchValue,
          type,
          setType,
          startDate,
          setStartDate,
          endDate,
          setEndDate,
        }}
        rightContent={rightContent}
        rightContentProps={{ transactions, isLoading }}
      />
    </>
  )
}
export default Search
