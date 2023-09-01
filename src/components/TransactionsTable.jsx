import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

const TransactionsTable = ({ transactions }) => {
  console.log(transactions)
  const CustomRow = ({ tr }) => (
    <Tr>
      <Td>{tr.type}</Td>
      <Td>{tr.description}</Td>
      <Td isNumeric>{`$${tr.amount}`}</Td>
    </Tr>
  )
  return (
    <TableContainer>
      <Table size='md'>
        <Thead background='gray.100'>
          <Tr>
            <Th>Type</Th>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions?.map((e, i) => (
            <CustomRow tr={e} key={i} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TransactionsTable
