import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spinner,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { apiCategory, apiBudget } from '../../utils/apiCalls'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const CreateBudgetModal = ({ isOpen, closeModal, selectedBudget }) => {
  const periods = [
    { enum: 0, label: 'Week' },
    { enum: 1, label: 'Month' },
    { enum: 2, label: 'Year' },
  ]

  const [limitAmount, setLimitAmount] = useState(0)
  const [category, setCategory] = useState(null)
  const [period, setPeriod] = useState('0')

  const queryClient = useQueryClient()

  const {
    isLoading,
    data: categories,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: apiCategory.getAll,
  })

  const createMutation = useMutation(apiBudget.create, {
    onSuccess: () => {
      setLimitAmount(0)
      setCategory(null)
      closeModal()
      queryClient.invalidateQueries('budgets')
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const updateMutation = useMutation(apiBudget.update, {
    onSuccess: () => {
      closeModal()
      queryClient.invalidateQueries('budgets')
      queryClient.setQueryData(['budgets', { id: selectedBudget.id }], {
        category,
        period: +period,
        limitAmount: +limitAmount,
      })
    },
    onError: error => {
      console.log(error.message)
    },
  })

  useEffect(() => {
    if (selectedBudget) {
      setLimitAmount(selectedBudget.limitAmount)
      setCategory(selectedBudget.category?.name)
      setPeriod(
        selectedBudget.period === 'Weekly'
          ? '0'
          : selectedBudget.period === 'Monthly'
          ? '1'
          : selectedBudget.period === 'Yearly'
          ? '2'
          : null
      )
    } else {
      setLimitAmount(0)
      setCategory(null)
      setPeriod(0)
    }
  }, [selectedBudget])

  const handleSave = () => {
    if (!isFormValid) return

    if (!selectedBudget) {
      createMutation.mutate({
        category: category,
        period: period,
        limitAmount: +limitAmount,
      })
    } else {
      updateMutation.mutate({
        id: selectedBudget?.id,
        data: {
          category: category,
          period: period,
          limitAmount: +limitAmount,
        },
      })
    }
  }

  const isFormValid = category && period && limitAmount > 0

  if (isLoading) {
    return (
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent display='grid' gap='1rem'>
          <ModalHeader>New budget</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='grid'
            justifyContent='center'
            alignItems='center'
            minH={250}
          >
            <Spinner />
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  }

  if (isError) {
    console.log(error)
  }

  if (category === null) {
    setCategory(categories?.data[0]?.name)
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent display='grid' gap='1rem'>
        <ModalHeader>New budget</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='grid' gap='2rem'>
          <Stack flexDirection='row' gap='2rem'>
            <FormControl isRequired={true}>
              <FormLabel>Category</FormLabel>
              <Select
                variant='flushed'
                borderBottomWidth='3px'
                borderColor='pink.500'
                _hover={{ borderColor: 'gray.200' }}
                onChange={e => setCategory(e.target.value)}
                value={category}
                disabled={!!selectedBudget}
              >
                {categories?.data?.map(category => (
                  <option key={category?.id} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired={true}>
              <FormLabel>Period</FormLabel>
              <Select
                variant='flushed'
                borderBottomWidth='3px'
                borderColor='pink.500'
                _hover={{ borderColor: 'gray.200' }}
                onChange={e => setPeriod(e.target.value)}
                value={period}
              >
                {periods.map(period => (
                  <option key={period.enum} value={period.enum}>
                    {period.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <FormControl isRequired={true} display='grid' justifyContent='center'>
            <FormLabel>Limit amount</FormLabel>
            <NumberInput
              onChange={value => setLimitAmount(value)}
              value={limitAmount}
              maxW='184px'
              _before={{
                content: "'$'",
                position: 'absolute',
                top: 1.5,
                color: 'gray.400',
              }}
            >
              <NumberInputField
                placeholder='1000'
                borderWidth={0}
                borderRadius={0}
                borderColor='pink.500'
                borderBottomWidth='3px'
                boxShadow='none'
                px={3}
                _focusVisible={{ borderWidth: 0, borderBottomWidth: '3px' }}
              />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter display='grid' justifyContent='center'>
          {createMutation.isLoading ? (
            <Button colorScheme='blue' mr={3} minW='120px'>
              <Spinner speed='600ms' thickness='3px' color='white' />
            </Button>
          ) : (
            <Button
              minW='120px'
              isDisabled={!isFormValid}
              colorScheme='blue'
              mr={3}
              onClick={handleSave}
            >
              Save
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreateBudgetModal
