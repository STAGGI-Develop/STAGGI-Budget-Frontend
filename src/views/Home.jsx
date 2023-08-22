import React from "react";
import { Stack } from "@chakra-ui/react";
import BalanceColumn from "../components/dashboard/BalanceColumn";
import SavingsBudgetsColumn from "../components/dashboard/SavingBudgetColumn";
import ChartColumn from "../components/dashboard/ChartColumn";

const Home = () => {
  return (
    <Stack
      h="full"
      marginX="10rem"
      marginY="1.5rem"
      direction="row"
      spacing="2rem"
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
  );
};

export default Home;
