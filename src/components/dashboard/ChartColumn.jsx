import React from "react";
import { AspectRatio, Spacer, Stack, Text } from "@chakra-ui/react";
import PieChart from "../PieChart";

const ChartColumn = () => {
  return (
    <Stack
      // w="full"
      h="full"
      flex={0.3}
      direction="column"
      spacing=".5rem"
    >
      <Text textStyle="cardHeader" color="gray.500">
        Last month expenses
      </Text>
      <Stack w="full" h="full" layerStyle="card" direction="column">
        <Stack>
          <AspectRatio maxW="100%" ratio={1} flex={1} p="5rem">
            <PieChart data={expendingData.filter((e) => e.value != 0)} />
          </AspectRatio>
        </Stack>
        {/* <AspectRatio
          maxW="560px"
          ratio={1}
          margin="1rem"
          rounded="full"
          background="gray.200"
        >
          <div>Gráfico</div>
        </AspectRatio> */}
        <Stack w="full" h="full" direction="column" spacing="0">
          {expendingData
            .filter((e) => e.value != 0)
            .map((exp, i) => (
              <Stack
                key={i}
                w="full"
                h="2.5rem"
                borderBottom={expendingData.length == i + 1 ? "0px" : "1px"}
                borderColor="gray.200"
                direction="row"
                spacing="0"
                align="center"
              >
                <div>{exp.label}</div>
                <Spacer />
                <div>{`$ ${exp.value}`}</div>
              </Stack>
            ))}
          {/* <div>Montos de los consumos por categoría</div> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChartColumn;

const expendingData = [
  {
    id: 1,
    label: "Groceries",
    value: 96,
  },
  {
    id: 2,
    label: "Health",
    value: 45,
  },
  {
    id: 3,
    label: "Home",
    value: 48,
  },
  {
    id: 4,
    label: "Miscellaneous",
    value: 132,
  },
  {
    id: 5,
    label: "Transportation",
    value: 91,
  },
  {
    id: 6,
    label: "Clothing",
    value: 0,
  },
  {
    id: 7,
    label: "Entertainment",
    value: 0,
  },
];
