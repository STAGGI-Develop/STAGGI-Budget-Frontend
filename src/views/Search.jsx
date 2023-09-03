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
  Button,
} from '@chakra-ui/react'
import { apiTransaction } from '../utils/apiCalls'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import TransactionsTable from '../components/TransactionsTable'

const leftContent = ({
  searchValue,
  type,
  setType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  search,
}) => {
  return (
    <Stack display='grid' justifyContent='center' w='100%'>
      <Text textStyle='cardHeader' color='gray.500'>
        Filter transactions
      </Text>
      <Stack display='grid' gap='1.75rem' layerStyle='card' spacing='.7rem'>
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
            <option value={null}>all</option>
            <option value={1}>income</option>
            <option value={0}>outcome</option>
          </Select>
        </FormControl>
        <Button
          type='submit'
          size='md'
          width='100%'
          colorScheme='blue'
          onClick={search}
        >
          Search
        </Button>
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
        // align='center'
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
    <Stack display='grid' w='full'>
      <Stack>
        <Text textStyle='cardHeader' color='gray.500'>
          Transactions
        </Text>
      </Stack>
      <Stack w='full' layerStyle='card'>
        <TransactionsTable transactions={transactions.data} />
      </Stack>
    </Stack>
  )
}

const Search = () => {
  const { reset, touched, setValue, ...searchValue } = useInput('text')
  const [type, setType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [query, setQuery] = useState('')

  console.log({ query })

  const {
    data: transactions,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => apiTransaction.getFiltered(query),
    enabled: false,
  })

  const search = () => {
    const searchFilters = {}
    searchValue.value && (searchFilters.keyword = searchValue.value)
    type && (searchFilters.type = type)
    startDate && (searchFilters.fromDate = new Date(startDate).toISOString())
    endDate && (searchFilters.toDate = new Date(endDate).toISOString())

    const result = Object.entries(searchFilters)
      .map(subArr => subArr.join('='))
      .join('&')

    setQuery(result)
  }

  useEffect(() => {
    refetch()
    console.log('useEffect')
  }, [refetch, query])

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
          search,
        }}
        rightContent={rightContent}
        rightContentProps={{ transactions, isLoading }}
      />
    </>
  )
}
export default Search
