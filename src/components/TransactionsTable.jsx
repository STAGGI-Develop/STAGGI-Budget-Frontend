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
  const CustomRow = ({ tr }) => {
    const titleAndDescription = `${tr.title} - ${tr.description}`

    return (
      <Tr>
        <Td>{tr.type}</Td>
        <Td maxW='40ch'>
          {titleAndDescription.length < 40
            ? titleAndDescription
            : titleAndDescription.slice(0, 37).trimEnd().concat('...')}
        </Td>
        <Td isNumeric>{`$${tr.amount}`}</Td>
      </Tr>
    )
  }
  return (
    <TableContainer maxW='80vw'>
      <Table size='md'>
        <Thead background='gray.100'>
          <Tr>
            <Th>Type</Th>
            <Th>Title</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions?.slice(0, 6)?.map((e, i) => (
            <CustomRow tr={e} key={i} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TransactionsTable
