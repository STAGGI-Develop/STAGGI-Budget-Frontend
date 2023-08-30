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
  Input,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react'
import { useInput } from '../../hooks'

import { useState } from 'react'
import { apiSaving } from '../../utils/apiCalls'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const CreateGoalModal = ({ isOpen, closeModal }) => {
  const { reset, touched: touchedName, ...name } = useInput('text')
  const [targetAmount, setTargetAmount] = useState('')

  const queryClient = useQueryClient();

  const mutation = useMutation(apiSaving.create, {
    onSuccess: () => {
      reset()
      closeModal()
      queryClient.invalidateQueries("savings")
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const handleSave = () => {
    if (!isFormValid) return

    mutation.mutate({ Name: name.value, TargetAmount: +targetAmount })
  }

  const isFormValid = name.value.trim() !== '' && targetAmount > 0

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent display='grid' gap='1rem'>
        <ModalHeader>New goal</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' gap='2rem'>
          <FormControl isRequired={true}>
            <FormLabel>Name</FormLabel>
            <Input
              {...name}
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
          <FormControl isRequired={true}>
            <FormLabel>Target amount</FormLabel>
            <NumberInput
              onChange={value => setTargetAmount(value)}
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

export default CreateGoalModal
