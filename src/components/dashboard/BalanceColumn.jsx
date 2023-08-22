import React from "react";
import { Stack, Text } from "@chakra-ui/react";

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
  return (
    <Stack
      // w="full"
      h="full"
      flex={0.4}
      direction="column"
      spacing=".5rem"
    >
      <Text textStyle="cardHeader" color="gray.500">
        Total balance
      </Text>

      <BalanceCard />
      {/* <Stack
        w="full"
        h="15rem"
        direction="column"
        layerStyle="card"
        justify="center"
        align="center"
      >
        <div>Balance actual</div>
      </Stack> */}

      <Text marginTop="1rem" textStyle="cardHeader" color="gray.500">
        Last transactions
      </Text>
      <Stack
        w="full"
        h="full"
        layerStyle="card"
        justify="center"
        align="center"
      >
        <div>Últimas transacciones</div>
      </Stack>
    </Stack>
  );
};

export default BalanceColumn;
