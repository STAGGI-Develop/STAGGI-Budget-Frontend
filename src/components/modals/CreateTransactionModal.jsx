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
  Textarea,
} from '@chakra-ui/react'

import { useState } from 'react'
import { apiCategory, apiSaving, apiTransaction } from '../../utils/apiCalls'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useInput } from '../../hooks'

const CreateTransactionModal = ({ isOpen, closeModal }) => {
  const types = ['2', '1']

  const { reset, touched, setValue, ...title } = useInput('text')
  const [notes, setNotes] = useState('')
  const [category, setCategory] = useState(null)
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('2')
  const [saving, setSaving] = useState(null)

  console.log(saving)

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
    isLoading: loadingCategories,
    data: categories,
    isError: isCategoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: apiCategory.getAll,
  })

  const {
    isLoading: loadingSavings,
    data: savings,
    isError: isSavingsError,
  } = useQuery({
    queryKey: ['savings'],
    queryFn: apiSaving.getAll,
  })

  const mutation = useMutation(apiTransaction.create, {
    onSuccess: () => {
      reset()
      setAmount(0)
      setCategory(null)
      setSaving(null)
      closeModal()
      queryClient.invalidateQueries('transactions')
      queryClient.invalidateQueries('profile')
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const handleSave = () => {
    if (!isFormValid) return

    console.log({
      Title: title.value,
      Description: notes || null,
      Type: +type,
      Amount: type === '2' ? +amount * -1 : +amount,
      Category: type === '2' ? category : null,
      Saving: type === '1' ? saving : null,
    })

    mutation.mutate({
      Title: title.value,
      Description: notes || null,
      Type: +type,
      Amount: type === '2' ? +amount * -1 : +amount,
      Category: category,
      Saving: saving,
    })
  }

  const isFormValid = title.value !== '' && category && amount > 0 && type

  if (loadingCategories || loadingSavings) {
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

  if (isCategoriesError || isSavingsError) {
    console.log('Something went wrong')
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
              <FormLabel>Title</FormLabel>
              <Input
                {...title}
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
            <FormControl isRequired={false}>
              <FormLabel>Notes (optional)</FormLabel>
              <Input
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder='Two week travel to Canada'
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
          </Stack>
          <Stack flexDirection='row' gap='2rem'>
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
                    {type == '1' ? 'Income' : 'Expense'}
                  </option>
                ))}
              </Select>
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
                {categories?.data
                  ?.filter(c => !c.isDisabled)
                  .map(category => (
                    <option key={category?.id} value={category?.name}>
                      {category?.name?.length > 15
                        ? category?.name.slice(0, 9).concat('...')
                        : category?.name}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <FormControl isRequired={false}>
              <FormLabel>Saving</FormLabel>
              <Select
                variant='flushed'
                borderBottomWidth='3px'
                borderColor='pink.500'
                _hover={{ borderColor: 'gray.200' }}
                onChange={e => setSaving(e.target.value)}
                isDisabled={type !== '1'}
              >
                {savings?.data
                  ?.filter(s => !s.isDisabled)
                  .map(saving => (
                    <option key={saving?.id} value={saving?.name}>
                      {saving?.name?.length > 15
                        ? saving?.name.slice(0, 9).concat('...')
                        : saving?.name}
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
