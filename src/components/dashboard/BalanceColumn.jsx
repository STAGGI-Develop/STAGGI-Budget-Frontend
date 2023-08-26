import React from 'react'
import {
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { apiTransaction } from '../../utils/apiCalls'
import { useQuery } from '@tanstack/react-query'

const BalanceCard = () => (
  <Stack layerStyle='card'>
    {/* Balance text */}
    <Stack
      padding='.4rem'
      direction='row'
      justify='center'
      align='center'
      overflow='hidden'
      alignSelf='stretch'
    >
      <Text
        fontWeight='semibold'
        fontSize='1.5rem'
        color='gray.600'
        textAlign='end'
      >
        $
      </Text>
      <Text fontWeight='semibold' fontSize='2.5rem' textAlign='end'>
        123.520
      </Text>
    </Stack>

    <Stack
      direction='row'
      justify='flex-start'
      align='center'
      spacing='1rem'
      overflow='hidden'
      flex='1'
      alignSelf='stretch'
    >
      {/* Income */}
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='.25rem'
        overflow='hidden'
        flex='1'
        alignSelf='stretch'
      >
        <Stack direction='row'>
          <Text fontWeight='medium' fontSize='.9rem' color='gray.500'>
            Income
          </Text>
          <Text fontWeight='bold' fontSize='.9rem' color='gray.700'>
            $25.240
          </Text>
        </Stack>
        <Stack
          h='3rem'
          padding='.5rem'
          direction='row'
          justify='center'
          align='center'
          alignSelf='stretch'
        >
          <Stack w='full' h='2.5px' background='green' />
        </Stack>
      </Stack>

      {/* Expending */}
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='.25rem'
        overflow='hidden'
        flex='1'
        alignSelf='stretch'
      >
        <Stack direction='row'>
          <Text fontWeight='medium' fontSize='.9rem' color='gray.500'>
            Expending
          </Text>
          <Text fontWeight='bold' fontSize='.9rem' color='gray.700'>
            $18.220
          </Text>
        </Stack>
        <Stack
          h='3rem'
          padding='.5rem'
          direction='row'
          justify='center'
          align='center'
          alignSelf='stretch'
        >
          <Stack w='full' h='2.5px' background='staggi-pink.300' />
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)

const BalanceColumn = () => {
  const {
    isLoading: loadingTransactions,
    data: transactions,
    isError: isErrorTransactions,
    error: errorTransactions,
  } = useQuery({
    queryKey: ['transactions'],
    queryFn: apiTransaction.getAll,
  })
  return (
    <Stack
      // w="full"
      h='full'
      maxH='full'
      flex={0.4}
      direction='column'
      spacing='.5rem'
    >
      <Stack>
        <Text textStyle='cardHeader' color='gray.500'>
          Total balance
        </Text>

        <BalanceCard />
      </Stack>

      {/*
      --
       Pendiente botones
       --
       */}
      <Stack h='full'>
        <Text marginTop='1rem' textStyle='cardHeader' color='gray.500'>
          Last transactions
        </Text>
        {loadingTransactions ? (
          <Stack
            w='full'
            h='auto'
            direction='column'
            layerStyle='card'
            spacing='0rem'
            align='center'
          >
            <Spinner
              margin='1.5rem'
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.100'
              color='pink.500'
              size='xl'
            />
          </Stack>
        ) : (
          <Stack w='full' h='full' layerStyle='card'>
            <TransactionsTable item={transactions?.data} size='md' />
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default BalanceColumn

export const TransactionsTable = ({ item, size }) => {
  const CustomRow = ({ tr }) => (
    <Tr>
      <Td>{tr.Type}</Td>
      <Td>{tr.Description}</Td>
      <Td isNumeric>{`$${tr.Amount}`}</Td>
    </Tr>
  )
  return (
    <TableContainer>
      <Table size={size}>
        <Thead background='gray.100'>
          <Tr>
            <Th>Icon</Th>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {item.slice(0, 9).map((e, i) => (
            <CustomRow tr={e} key={i} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
