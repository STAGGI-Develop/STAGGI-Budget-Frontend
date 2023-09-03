import ContentLayout from '../components/layouts/ContentLayout'
import {
  Button,
  Icon,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiBudget } from '../utils/apiCalls'
import { Link, useParams } from 'react-router-dom'
import CustomList from '../components/CustomList'
import LoadingCard from '../components/LoadingCard'
import TransactionsTable from '../components/TransactionsTable'
import CreateBudgetModal from '../components/modals/CreateBudgetModal'
import { useState } from 'react'

const LeftContent = () => {
  const queryClient = useQueryClient()
  const [selectedBudget, setSelectedBudget] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const cachedData = queryClient.getQueryData('myQueryKey');

  const {
    isLoading: loadingBudgets,
    data: budgets,
    isError: isBudgetsError,
    error: errorBudgets,
  } = useQuery({
    queryKey: ['budgets'],
    queryFn: apiBudget.getAll,
  })

  const mutation = useMutation(apiBudget.update, {
    onSuccess: () => {
      queryClient.invalidateQueries('budgets')
      queryClient.setQueryData(['budgets', { id: selectedBudget.id }], {
        isDisabled: true,
      })
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const handleCreate = () => {
    setSelectedBudget(null)
    onOpen()
  }

  const handleEdit = id => {
    setSelectedBudget(id)
    onOpen()
  }
  const handleDelete = id => {
    setSelectedBudget(id)
    mutation.mutate({ id, data: { isDisabled: true } })
  }

  return (
    <Stack id='Budgets container' maxH='50%' w='full'>
      <Text textStyle='cardHeader' color='gray.500'>
        All budgets
      </Text>
      {loadingBudgets ? (
        <LoadingCard />
      ) : (
        <Stack
          w='full'
          h='auto'
          direction='column'
          layerStyle='card'
          spacing='.7rem'
        >
          <CustomList
            list={budgets?.data?.filter(b => !b.isDisabled)}
            listType='budget'
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <Button
            w='40%'
            size='sm'
            alignSelf='center'
            colorScheme='blue'
            variant='solid'
            onClick={handleCreate}
          >
            New Budget
          </Button>
          <CreateBudgetModal
            isOpen={isOpen}
            closeModal={onClose}
            selectedBudget={budgets.data.find(b => b.id === selectedBudget)}
          />
        </Stack>
      )}
    </Stack>
  )
}

const RightContent = () => {
  const { id: param } = useParams()

  const {
    isLoading: loadingBudgetDetail,
    data: budgetDetail,
    isError: isBudgetDetailError,
    error: errorBudgetDetail,
  } = useQuery({
    queryKey: ['budgets', param],
    queryFn: () => apiBudget.getById(+param),
    enabled: param !== undefined,
  })

  return (
    <Stack id='Budgets container' maxH='50%' w='full'>
      <Text textStyle='cardHeader' color='gray.500'>
        Budget details
      </Text>

      {/* <p>{idParam}</p> */}
      {!param ? (
        <p>Seleccione un Budget para ver sus detalles</p>
      ) : loadingBudgetDetail ? (
        <LoadingCard />
      ) : (
        budgetDetail && (
          <Stack w='full' h='auto' layerStyle='card'>
            <TransactionsTable
              transactions={budgetDetail?.data?.transactions}
            />
          </Stack>
        )
        // <p>{JSON.stringify(budgetDetail.data.Transactions)}</p>
      )}
    </Stack>
  )
}

const Budget = () => {
  return (
    <>
      <ContentLayout leftContent={LeftContent} rightContent={RightContent} />
    </>
  )
}

export default Budget
