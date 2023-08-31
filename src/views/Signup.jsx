import {
  Stack,
  Box,
  Text,
  Input,
  Button,
  Spinner,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useInput } from '../hooks'
import validateInput from '../utils/validateInput'
import { apiUser } from '../utils/apiCalls'
import { useMutation } from '@tanstack/react-query'

const Signup = () => {
  const navigate = useNavigate()

  const {
    reset: resetFirstName,
    touched: touchedFirstName,
    ...firstName
  } = useInput('text')
  const {
    reset: resetLastName,
    touched: touchedLastName,
    ...lastName
  } = useInput('text')
  const {
    reset: resetEmail,
    touched: touchedEmail,
    ...email
  } = useInput('text')
  const {
    reset: resetPassword,
    touched: touchedPassword,
    ...password
  } = useInput('password')

  const { isError: isErrorFirstName, error: errorFirstName } = validateInput(
    firstName.value,
    'firstName'
  )

  const { isError: isErrorLastName, error: errorLastName } = validateInput(
    lastName.value,
    'lastName'
  )

  const { isError: isErrorEmail, error: errorEmail } = validateInput(
    email.value,
    'email'
  )

  const { isError: isErrorPassword, error: errorPassword } = validateInput(
    password.value,
    'password'
  )

  const isFormValid =
    !isErrorFirstName && !isErrorLastName && !isErrorEmail && !isErrorPassword

  const mutation = useMutation(apiUser.register, {
    onSuccess: () => {
      resetFirstName()
      resetLastName()
      resetEmail()
      resetPassword()
      navigate('/dashboard')
    },
    onError: error => console.log(error.message),
  })

  const handleSubmit = e => {
    e.preventDefault()
    mutation.mutate({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    })
  }

  return (
    <Stack flex={1} direction='row' minH='100vh'>
      {/* Form */}
      <Stack
        w='50%'
        paddingX='10rem'
        paddingTop='4rem'
        paddingBottom='2rem'
        // paddingBottom="50px"
        justify='flex-start'
        align='flex-start'
        spacing='40px'
        // overflow="hidden"
      >
        {/* <Box width="48px" height="48px" background="blackAlpha.300" /> */}
        {/* <Box
          width="4rem"
          height="4rem"
          rounded="xl"
          bgImage="url('src/assets/logo-icon.svg')"
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          as={Link}
          to="/"
        /> */}
        <Stack
          width='4rem'
          height='4rem'
          padding='0.5rem'
          rounded='xl'
          background='blue.500'
          as={Link}
          to='/'
        >
          <Box
            width='full'
            height='full'
            bgImage="url('src/assets/logo-pig.svg')"
            bgSize='contain'
            bgPosition='center'
            bgRepeat='no-repeat'
          />
        </Stack>
        <Stack
          justify='flex-start'
          align='flex-start'
          spacing='20px'
          alignSelf='stretch'
        >
          <Text fontWeight='bold' fontSize='2.5rem'>
            Sign Up
          </Text>
          <Text fontWeight='medium' fontSize='1.25rem'>
            Start managing your budget
          </Text>
        </Stack>

        {/* Form */}
        <Stack
          as='form'
          onSubmit={handleSubmit}
          justify='stretch'
          align='flex-start'
          alignSelf='stretch'
          sx={{ display: 'grid', gap: '20px' }}
        >
          <FormControl
            isRequired={true}
            isInvalid={touchedFirstName && isErrorFirstName}
            justify='flex-start'
            align='flex-start'
            spacing='0px'
            alignSelf='stretch'
          >
            <FormLabel fontWeight='medium' fontSize='14px' color='black'>
              First name
            </FormLabel>
            <Input
              placeholder='First name'
              size='lg'
              height='48px'
              alignSelf='stretch'
              {...firstName}
            />
            {isErrorFirstName && (
              <FormErrorMessage>{errorFirstName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired={true}
            isInvalid={touchedLastName && isErrorLastName}
            justify='flex-start'
            align='flex-start'
            spacing='4px'
            alignSelf='stretch'
          >
            <FormLabel fontWeight='medium' fontSize='14px' color='black'>
              Last name
            </FormLabel>
            <Input
              placeholder='Last name'
              size='lg'
              height='48px'
              alignSelf='stretch'
              {...lastName}
            />
            {isErrorLastName && (
              <FormErrorMessage>{errorLastName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired={true}
            isInvalid={touchedEmail && isErrorEmail}
            justify='flex-start'
            align='flex-start'
            spacing='4px'
            alignSelf='stretch'
          >
            <FormLabel fontWeight='medium' fontSize='14px' color='black'>
              Email
            </FormLabel>
            <Input
              placeholder='Email'
              size='lg'
              height='48px'
              alignSelf='stretch'
              {...email}
            />
            {isErrorEmail && <FormErrorMessage>{errorEmail}</FormErrorMessage>}
          </FormControl>
          <FormControl
            isRequired={true}
            isInvalid={touchedPassword && isErrorPassword}
            justify='flex-start'
            align='flex-start'
            spacing='4px'
            alignSelf='stretch'
          >
            <FormLabel fontWeight='medium' fontSize='14px' color='black'>
              Password
            </FormLabel>
            <Input
              placeholder='Password'
              size='lg'
              height='48px'
              alignSelf='stretch'
              {...password}
            />
            {isErrorPassword && (
              <FormErrorMessage>{errorPassword}</FormErrorMessage>
            )}
          </FormControl>
          {mutation.isLoading ? (
            <Button size='md' width='100%' colorScheme='blue'>
              <Spinner speed='600ms' thickness='3px' color='white' />
            </Button>
          ) : (
            <Button
              type='submit'
              isDisabled={!isFormValid}
              size='md'
              width='100%'
              colorScheme='blue'
            >
              Sign up
            </Button>
          )}
        </Stack>

        {/* Create account */}
        <Stack
          direction='row'
          justify='flex-start'
          align='flex-start'
          alignSelf='stretch'
        >
          <Text fontWeight='medium' fontSize='14px'>
            Already have an account?
          </Text>
          <Text
            as={Link}
            to='/signin'
            fontWeight='semibold'
            fontSize='14px'
            color='blue.600'
          >
            Sign in
          </Text>
        </Stack>
      </Stack>

      {/* Info section */}
      <Stack w='50%' background='staggi-blue.600' />
    </Stack>
  )
}

export default Signup
