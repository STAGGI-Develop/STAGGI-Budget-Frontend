import { Button, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import CreateGoalModal from '../components/modals/CreateGoalModal'
import CreateBudgetModal from '../components/modals/CreateBudgetModal'
import CreateTransactionModal from '../components/modals/CreateTransactionModal'

const Search = () => {
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false)
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false)
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  return (
    <>
      <CreateGoalModal
        isOpen={isGoalModalOpen}
        closeModal={() => setIsGoalModalOpen(false)}
      />
      <CreateBudgetModal
        isOpen={isBudgetModalOpen}
        closeModal={() => setIsBudgetModalOpen(false)}
      />
      <CreateTransactionModal
        isOpen={isTransactionModalOpen}
        closeModal={() => setIsTransactionModalOpen(false)}
      />
      <Stack
        h='full'
        marginX='10rem'
        marginy='1.5rem'
        direction='row'
        justify='center'
        align='center'
        spacing='3rem'
        overflow='hidden'
        alignSelf='stretch'
        borderColor='blackAlpha.100'
      >
        <Button
          w='9rem'
          size='sm'
          marginTop='.7rem'
          alignSelf='center'
          colorScheme='blue'
          variant='solid'
          onClick={() => setIsGoalModalOpen(true)}
        >
          New Goal
        </Button>
        <Button
          w='9rem'
          size='sm'
          marginTop='.7rem'
          alignSelf='center'
          colorScheme='blue'
          variant='solid'
          onClick={() => setIsBudgetModalOpen(true)}
        >
          New Budget
        </Button>
        <Button
          w='9rem'
          size='sm'
          marginTop='.7rem'
          alignSelf='center'
          colorScheme='blue'
          variant='solid'
          onClick={() => setIsTransactionModalOpen(true)}
        >
          New Transaction
        </Button>
      </Stack>
    </>
  )
}
export default Search
