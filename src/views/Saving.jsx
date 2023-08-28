import ContentLayout from "../components/layouts/ContentLayout";
import { Button, Icon, Spinner, Stack, Text, Tooltip } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiSaving } from "../utils/apiCalls";
import { Link, useParams } from "react-router-dom";
import CustomList from "../components/CustomList";
import LoadingCard from "../components/LoadingCard";
import TransactionsTable from "../components/TransactionsTable";

const LeftContent = () => {
  // const cachedData = queryClient.getQueryData('myQueryKey');

  const {
    isLoading: loadingSavings,
    data: savings,
    isError: isSavingsError,
    error: errorSavings,
  } = useQuery({
    queryKey: ["savings"],
    queryFn: apiSaving.getAll,
  });

  return (
    <Stack id="Goals container" maxH="50%" w="full">
      <Text textStyle="cardHeader" color="gray.500">
        All goals
      </Text>

      {loadingSavings ? (
        <LoadingCard />
      ) : (
        <Stack
          w="full"
          h="auto"
          direction="column"
          layerStyle="card"
          spacing=".7rem"
        >
          <CustomList list={savings.data} listType="goal" />
          <Button
            w="40%"
            size="sm"
            alignSelf="center"
            colorScheme="blue"
            variant="solid"
          >
            New Goal
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

const RightContent = () => {
  const { id: param } = useParams();

  const {
    isLoading: loadingSavingDetail,
    data: savingDetail,
    isError: isSavingDetailError,
    error: errorSavingDetail,
  } = useQuery({
    queryKey: ["savings", param],
    queryFn: () => apiSaving.getById(param),
  });

  return (
    <Stack id="Goals container" maxH="50%" w="full">
      <Text textStyle="cardHeader" color="gray.500">
        Goal details
      </Text>

      {/* <p>{idParam}</p> */}
      {
      !param ? (
        <p>Seleccione un Goal para ver sus detalles</p>
      ) : loadingSavingDetail ? (
        <LoadingCard />
      ) : (
        savingDetail &&
        <Stack w="full" h="auto" layerStyle="card">
          <TransactionsTable transactions={savingDetail?.data.Transactions} />
        </Stack>
        // <p>{JSON.stringify(savingDetail.data.Transactions)}</p>
      )}
    </Stack>
  );
};

const Saving = () => {
  return (
    <>
      <ContentLayout leftContent={LeftContent} rightContent={RightContent} />
    </>
  );
};

export default Saving;
