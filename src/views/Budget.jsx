import ContentLayout from "../components/layouts/ContentLayout";
import { Button, Icon, Spinner, Stack, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiBudget } from "../utils/apiCalls";
import { Link, useParams } from "react-router-dom";
import CustomList from "../components/CustomList";
import LoadingCard from "../components/LoadingCard";
import TransactionsTable from "../components/TransactionsTable";
import CreateBudgetModal from "../components/modals/CreateBudgetModal";

const LeftContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const cachedData = queryClient.getQueryData('myQueryKey');

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
    <Stack id="Budgets container" maxH="50%" w="full">
      <Text textStyle="cardHeader" color="gray.500">
        All budgets
      </Text>

      {loadingBudgets ? (
        <LoadingCard />
      ) : (
        <Stack
          w="full"
          h="auto"
          direction="column"
          layerStyle="card"
          spacing=".7rem"
        >
          <CustomList list={budgets.data} listType="budget"/>
          <Button
            w="40%"
            size="sm"
            alignSelf="center"
            colorScheme="blue"
            variant="solid"
            onClick={onOpen}
          >
            New Budget
          </Button>
          <CreateBudgetModal isOpen={isOpen} closeModal={onClose}/>
        </Stack>
      )}
    </Stack>
  );
};

const RightContent = () => {
  const { id: param } = useParams();

  const {
    isLoading: loadingBudgetDetail,
    data: budgetDetail,
    isError: isBudgetDetailError,
    error: errorBudgetDetail,
  } = useQuery({
    queryKey: ["budgets", param],
    queryFn: () => apiBudget.getById(param),
  });

  return (
    <Stack id="Budgets container" maxH="50%" w="full">
      <Text textStyle="cardHeader" color="gray.500">
        Budget details
      </Text>

      {/* <p>{idParam}</p> */}
      {
      !param ? (
        <p>Seleccione un Budget para ver sus detalles</p>
      ) : loadingBudgetDetail ? (
        <LoadingCard />
      ) : (
        budgetDetail &&
        <Stack w="full" h="auto" layerStyle="card">
          <TransactionsTable transactions={budgetDetail?.data.Transactions} />
        </Stack>
        // <p>{JSON.stringify(budgetDetail.data.Transactions)}</p>
      )}
    </Stack>
  );
};

const Budget = () => {
  return (
    <>
      <ContentLayout leftContent={LeftContent} rightContent={RightContent} />
    </>
  );
};

export default Budget;
