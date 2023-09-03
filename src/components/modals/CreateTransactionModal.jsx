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
  Input,
} from '@chakra-ui/react'

import { useState } from 'react'
import { apiCategory, apiTransaction } from '../../utils/apiCalls'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useInput } from '../../hooks'

const CreateTransactionModal = ({ isOpen, closeModal }) => {
  const types = [1, 2]

  const { reset, touched, setValue, ...description } = useInput('text')
  const [category, setCategory] = useState(null)

  const [amount, setAmount] = useState(0)
  const [type, setType] = useState(2)

  /*
    {
      "id": 1,
      "Description": "compra 1",
      "Amount": -50,
      "CreateDate": "2023-08-15 10:00:00",
      "Category": "Groceries",
      "Type": "out"
    }
  */

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

  const mutation = useMutation(apiTransaction.create, {
    onSuccess: () => {
      reset()
      setAmount(0)
      setCategory(null)
      closeModal()
      queryClient.invalidateQueries('transactions')
      queryClient.invalidateQueries('profile')
      console.log('OK___')
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const handleSave = () => {
    if (!isFormValid) return

    console.log({
      Description: description.value,
      Type: type,
      Amount: type === 2 ? +amount * -1 : +amount,
      Category: category,
    })

    mutation.mutate({
      Description: description.value,
      Type: type,
      Amount: type === 2 ? +amount * -1 : +amount,
      Category: category,
    })
  }

  const isFormValid = description !== '' && category && amount > 0 && type

  if (isLoading) {
    return (
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent display='grid' gap='1rem'>
          <ModalHeader>New transaction</ModalHeader>
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
        <ModalHeader>New transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='grid' gap='2rem'>
          <Stack flexDirection='row' gap='2rem'>
            <FormControl isRequired={true}>
              <FormLabel>Description</FormLabel>
              <Input
                {...description}
                placeholder='Vacation'
                borderWidth={0}
                borderRadius={0}
                borderBottomWidth='3px'
                boxShadow='none'
                px={0}
                _focusVisible={{ borderWidth: 0, borderBottomWidth: '3px' }}
                _empty={{ borderColor: 'pink.500' }}
                _hover={{ borderColor: 'gray.200' }}
              />
            </FormControl>
            <FormControl
              isRequired={true}
              display='grid'
              justifyContent='center'
            >
              <FormLabel>Amount</FormLabel>
              <NumberInput
                onChange={value => setAmount(value)}
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
          </Stack>
          <Stack flexDirection='row' gap='2rem'>
            <FormControl isRequired={true}>
              <FormLabel>Category</FormLabel>
              <Select
                variant='flushed'
                borderBottomWidth='3px'
                borderColor='pink.500'
                _hover={{ borderColor: 'gray.200' }}
                onChange={e => setCategory(e.target.value)}
              >
                {categories?.data?.map(category => (
                  <option key={category?.id} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired={true}>
              <FormLabel>Type</FormLabel>
              <Select
                variant='flushed'
                borderBottomWidth='3px'
                borderColor='pink.500'
                _hover={{ borderColor: 'gray.200' }}
                onChange={e => setType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type == 1 ? 'Income' : 'Expense'}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter display='grid' justifyContent='center'>
          {mutation.isLoading ? (
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

export default CreateTransactionModal
