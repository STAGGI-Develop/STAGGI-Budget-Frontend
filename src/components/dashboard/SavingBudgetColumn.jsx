import { Link } from "react-router-dom";
import {
  Button,
  Progress,
  Stack,
  Text,
  Spinner,
  Square,
  Box,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSaving, apiBudget } from "../../utils/apiCalls";

const SavingsBudgetsColumn = () => {

  const {
    isLoading: loadingSavings,
    data: savings,
    isError: isSavingsError,
    error: errorSavings,
  } = useQuery({
    queryKey: ["savings"],
    queryFn: apiSaving.getAll,
  });

  const {
    isLoading: loadingBudgets,
    data: budgets,
    isError: isBudgetsError,
    error: errorBudgets,
  } = useQuery({
    queryKey: ["budgets"],
    queryFn: apiBudget.getAll,
  });

  return (
    <Stack
      // w="full"
      h="full"
      flex={0.3}
      direction="column"
      spacing=".5rem"
    >
      <Stack id="Goals container" maxH="50%">
        <Text textStyle="cardHeader" color="gray.500">
          Goals
        </Text>

        {loadingSavings ? (
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
          <Stack
            w="full"
            h="auto"
            direction="column"
            layerStyle="card"
            spacing="0rem"
          >
            {savings.data.map((saving, i) => (
              <SavingCard key={i} item={saving} />
            ))}
            <Button
              w="40%"
              size="sm"
              marginTop=".7rem"
              alignSelf="center"
              colorScheme="blue"
              variant="solid"
            >
              New Goal
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack id="Budgets container" maxH="50%">
        <Text marginTop="1rem" textStyle="cardHeader" color="gray.500">
          Budgets
        </Text>

        {loadingBudgets ? (
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
          <Stack
            w="full"
            h="auto"
            direction="column"
            layerStyle="card"
            spacing="0rem"
          >
            {budgets.data.map((budget, i) => (
              <BudgetCard key={i} item={budget} />
            ))}
            <Button
              w="40%"
              size="sm"
              marginTop=".7rem"
              alignSelf="center"
              colorScheme="blue"
              variant="solid"
            >
              New Budget
            </Button>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default SavingsBudgetsColumn;

const SavingCard = ({ item }) => {
  let progress = Math.ceil((item.Balance * 100) / item.TargetAmount);
  return (
    <Stack
      padding=".5rem"
      justify="center"
      align="center"
      spacing="0rem"
      overflow="hidden"
      width="full"
      height="4.5rem"
      borderBottom="1px"
      borderColor="gray.200"
      // maxWidth="100%"
      // background="#FFFFFF"
      cursor="default"
      _hover={{ bg: "gray.100" }}
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
      >
        <Stack as={Link} to={`/goal/${item.id}`}>
          <Text
            fontWeight="medium"
            fontSize="1rem"
            flex="1"
            _hover={{ color: "blue.600" }}
          >
            {item.Name}
          </Text>
        </Stack>
        <Stack
          direction="row"
          fontWeight="medium"
          fontSize=".9rem"
          spacing=".25rem"
        >
          <Text color="blue.600" fontWeight="bold">
            {`$${item.Balance} /`}
          </Text>
          <Text color="gray.500">${item.TargetAmount}</Text>
        </Stack>
      </Stack>
      {/* Progress */}
      <Stack
        w="full"
        direction="row"
        justify="center"
        align="center"
        overflow="hidden"
        flex="1"
      >
        <Text
          w="35%"
          fontWeight="medium"
          fontSize=".75rem"
          color="gray.500"
          textAlign="end"
        >
          {`Progress ${progress}%`}
        </Text>
        <Progress
          w="65%"
          value={progress}
          hasStripe
          size="sm"
          colorScheme="blue"
          background="gray.200"
          // sx={{
          //   "& > div": {
          //     background:
          //       "linear-gradient(90deg, pink 10%, #f015e1 90%)",
          //   },
          // }}
        />
      </Stack>
    </Stack>
  );
};

const BudgetCard = ({ item }) => {
  let progress = Math.ceil((item.Balance * 100) / item.LimitAmount);
  return (
    <Stack
      width="full"
      height="4.5rem"
      paddingX=".5rem"
      paddingY=".75rem"
      justify="center"
      align="center"
      spacing=".8rem"
      direction="row"
      overflow="hidden"
      borderBottom="1px"
      borderColor="gray.200"
      // maxWidth="100%"
      // background="#FFFFFF"
      cursor="default"
      _hover={{ bg: "gray.100" }}
    >
      <Square w="3rem" h="full" padding="3%" rounded="lg" background="pink.100">
        <Box
          w="full"
          h="full"
          bgImage="url('src/assets/navbar/search.svg')"
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          opacity=".7"
        />
      </Square>

      {/* ------------------- */}
      <Stack
        direction="column"
        overflow="hidden"
        flex="1"
        alignSelf="stretch"
        // align="center"
        justify="center"
        spacing=".1rem"
      >
        <Stack w="fit-content" as={Link} to={`/budget/${item.id}`}>
          <Text
            fontWeight="medium"
            fontSize=".9rem"
            flex="1"
            _hover={{ color: "blue.600" }}
          >
            {item.Category}
          </Text>
        </Stack>
        <Stack
          direction="row"
          // fontWeight="normal"
          fontSize=".8rem"
          spacing=".25rem"
        >
          <Text color="blue.600" fontWeight="semibold">
            {`$${item.Balance} /`}
          </Text>
          <Text color="gray.500">${item.LimitAmount}</Text>
        </Stack>
      </Stack>

      {/* ------------------- */}
      <CircularProgress value={progress} color="blue.400">
        <CircularProgressLabel fontWeight="semibold">{`${progress}%`}</CircularProgressLabel>
      </CircularProgress>
    </Stack>
  );
};
