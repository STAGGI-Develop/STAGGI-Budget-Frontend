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
import { apiSaving } from '../utils/apiCalls'
import { Link, useParams } from 'react-router-dom'
import CustomList from '../components/CustomList'
import LoadingCard from '../components/LoadingCard'
import TransactionsTable from '../components/TransactionsTable'
import CreateGoalModal from '../components/modals/CreateGoalModal'
import { useState } from 'react'

const LeftContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedGoal, setSelectedGoal] = useState(null)
  const queryClient = useQueryClient()
  // const cachedData = queryClient.getQueryData('myQueryKey');

  const {
    isLoading: loadingSavings,
    data: savings,
    isError: isSavingsError,
    error: errorSavings,
  } = useQuery({
    queryKey: ['savings'],
    queryFn: apiSaving.getAll,
  })

  const mutation = useMutation(apiSaving.update, {
    onSuccess: () => {
      queryClient.invalidateQueries('savings')
      queryClient.setQueryData(['savings', { id: selectedGoal.id }], {
        isDisabled: true,
      })
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const handleCreate = () => {
    setSelectedGoal(null)
    onOpen()
  }

  const handleEdit = id => {
    setSelectedGoal(id)
    onOpen()
  }
  const handleDelete = id => {
    setSelectedGoal(id)
    mutation.mutate({ id, data: { isDisabled: true } })
  }

  return (
    <Stack id='Goals container' maxH='50%' w='full'>
      <Text textStyle='cardHeader' color='gray.500'>
        All goals
      </Text>

      {loadingSavings ? (
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
            list={savings?.data?.filter(saving => !saving.isDisabled)}
            listType='goal'
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
            New Goal
          </Button>
          <CreateGoalModal
            isOpen={isOpen}
            closeModal={onClose}
            selectedGoal={savings.data.find(s => s.id === selectedGoal)}
          />
        </Stack>
      )}
    </Stack>
  )
}

const RightContent = () => {
  const { id: param } = useParams()

  const {
    isLoading: loadingSavingDetail,
    data: savingDetail,
    isError: isSavingDetailError,
    error: errorSavingDetail,
  } = useQuery({
    queryKey: ['savings', param],
    queryFn: () => apiSaving.getById(+param),
    enabled: param !== undefined,
  })

  return (
    <Stack id='Goals container' maxH='50%' w='full'>
      <Text textStyle='cardHeader' color='gray.500'>
        Goal details
      </Text>

      {/* <p>{idParam}</p> */}
      {!param ? (
        <p>Seleccione un Goal para ver sus detalles</p>
      ) : loadingSavingDetail ? (
        <LoadingCard />
      ) : (
        savingDetail && (
          <Stack w='full' h='auto' layerStyle='card'>
            <TransactionsTable
              transactions={savingDetail?.data?.transactions}
            />
          </Stack>
        )
        // <p>{JSON.stringify(savingDetail.data.Transactions)}</p>
      )}
    </Stack>
  )
}

const Saving = () => {
  return (
    <>
      <ContentLayout leftContent={LeftContent} rightContent={RightContent} />
    </>
  )
}

export default Saving
