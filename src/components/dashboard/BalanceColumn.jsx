import React from "react";
import { Box, Button, Icon, Spinner, Square, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { apiTransaction } from "../../utils/apiCalls";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import TransactionsTable from "../TransactionsTable";
import CreateTransactionModal from "../modals/CreateTransactionModal";
import WalletIcon from "../../assets/icons/wallet";

const BalanceCard2 = ({balance = -550}) => (
  <Stack layerStyle="card" direction="row">
    <Stack justify="start">
      <Stack
        paddingTop=".5rem"
        paddingBottom="1.5rem"
        direction="row"
        align="center"
        fontWeight="semibold"
        color = { (balance == 0) ? "black" : (balance < 0) ? "red.500" : "green.400"}
      >
        <Text fontSize="2rem">$</Text>
        <Text lineHeight="1" fontSize="3rem">
          {balance}
        </Text>
      </Stack>

      <Stack direction="row" align="center" fontWeight="medium">
        <Text color="gray.600">Date modified</Text>
        <Text color="gray.800">26-08-24 12:33</Text>
      </Stack>

      <Stack direction="row" align="center" fontWeight="medium">
        <Text color="gray.600">Last month</Text>
        <Text color="gray.800">$ 1.354</Text>
      </Stack>
    </Stack>

    <Stack
      justify="flex-start"
      align="flex-end"
      flex="1"
    >
      {/* <Stack
        w="3rem"
        h="3rem"
        justify="center"
        align="center"
        spacing="0"
        padding="0"
      >
        <Icon
          w="full"
          h="full"
          as={WalletIcon}
          stroke={ (balance == 0) ? "black" : (balance < 0) ? "red.500" : "green.400"}
        />
      </Stack> */}
      <Square w="3rem" h="3rem">
        <Box
          w="full"
          h="full"
          bgImage={ (balance >= 0) ? "url('src/assets/wallet-green.svg')" : "url('src/assets/wallet-red.svg')"}
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
      </Square>
      {/* <Stack
        width="48px"
        height="48px"
        background = { (balance == 0) ? "black" : (balance < 0) ? "red.500" : "green.400"}
      >
      </Stack> */}
    </Stack>
  </Stack>
);

const BalanceCard = () => (
  <Stack layerStyle="card">
    {/* Balance text */}
    <Stack
      padding=".4rem"
      direction="row"
      justify="center"
      align="center"
      overflow="hidden"
      alignSelf="stretch"
    >
      <Text
        fontWeight="semibold"
        fontSize="1.5rem"
        color="gray.600"
        textAlign="end"
      >
        $
      </Text>
      <Text fontWeight="semibold" fontSize="2.5rem" textAlign="end">
        123.520
      </Text>
    </Stack>

    <Stack
      direction="row"
      justify="flex-start"
      align="center"
      spacing="1rem"
      overflow="hidden"
      flex="1"
      alignSelf="stretch"
    >
      {/* Income */}
      <Stack
        justify="flex-start"
        align="flex-start"
        spacing=".25rem"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
      >
        <Stack direction="row">
          <Text fontWeight="medium" fontSize=".9rem" color="gray.500">
            Income
          </Text>
          <Text fontWeight="bold" fontSize=".9rem" color="gray.700">
            $25.240
          </Text>
        </Stack>
        <Stack
          h="3rem"
          padding=".5rem"
          direction="row"
          justify="center"
          align="center"
          alignSelf="stretch"
        >
          <Stack w="full" h="2.5px" background="green" />
        </Stack>
      </Stack>

      {/* Expending */}
      <Stack
        justify="flex-start"
        align="flex-start"
        spacing=".25rem"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
      >
        <Stack direction="row">
          <Text fontWeight="medium" fontSize=".9rem" color="gray.500">
            Expending
          </Text>
          <Text fontWeight="bold" fontSize=".9rem" color="gray.700">
            $18.220
          </Text>
        </Stack>
        <Stack
          h="3rem"
          padding=".5rem"
          direction="row"
          justify="center"
          align="center"
          alignSelf="stretch"
        >
          <Stack w="full" h="2.5px" background="staggi-pink.300" />
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

const BalanceColumn = () => {
  
  const queryClient = useQueryClient();
  let profile = queryClient.getQueryData(["profile"])?.data;
  let balance = profile?.balance;
  let lastTransactions = profile?.transactions;
  console.log(balance)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isLoading: loadingTransactions,
    data: transactions,
    isError: isErrorTransactions,
    error: errorTransactions,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: apiTransaction.getLast,
  });
  return (
    <Stack
      // w="full"
      h="full"
      maxH="full"
      flex={0.4}
      direction="column"
      spacing=".5rem"
    >
      <Stack>
        <Text textStyle="cardHeader" color="gray.500">
          Total balance
        </Text>

        <BalanceCard2 balance={balance}/>
      </Stack>
      
      <Button
        marginTop=".5rem"
        w="40%"
        size="sm"
        alignSelf="center"
        colorScheme="blue"
        variant="outline"
        onClick={onOpen}
      >
        New Transaction
      </Button>
      <CreateTransactionModal isOpen={isOpen} closeModal={onClose}/>

      {/*
      --
       Pendiente botones
       --
       */}
      <Stack h="full">
        <Text marginTop=".5rem" textStyle="cardHeader" color="gray.500">
          Last transactions
        </Text>
        {loadingTransactions ? (
          <Stack
            w="full"
            h="auto"
            direction="column"
            layerStyle="card"
            spacing="0rem"
            align="center"
          >
            <Spinner
              margin="1.5rem"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.100"
              color="pink.500"
              size="xl"
            />
          </Stack>
        ) : (
          transactions && (
            <Stack w="full" h="auto" layerStyle="card">
              <TransactionsTable transactions={transactions.data} />
            </Stack>
          )
        )}
      </Stack>
    </Stack>
  );
};

export default BalanceColumn;
