import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const TransactionsTable = ({ transactions }) => {
  const CustomRow = ({ tr }) => (
    <Tr>
      <Td>{tr.Type}</Td>
      <Td>{tr.Description}</Td>
      <Td isNumeric>{`$${tr.Amount}`}</Td>
    </Tr>
  );
  return (
    <TableContainer>
      <Table size="md">
        <Thead background="gray.100">
          <Tr>
            <Th>Icon</Th>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions?.slice(0, 6).map((e, i) => (
            <CustomRow tr={e} key={i} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;