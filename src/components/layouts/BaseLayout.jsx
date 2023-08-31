import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import { apiUser } from '../../utils/apiCalls'
import { useQuery } from '@tanstack/react-query'
import { Spinner, Stack } from '@chakra-ui/react'

const Layout = () => {
  const navigate = useNavigate()
  const { isLoading, isError } = useQuery({
    queryKey: ['profile'],
    queryFn: apiUser.getProfile,
    retry: 1,
  })

  if (isLoading) {
    return (
      <Stack minH='100vh' justify='center' align='center'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.100'
          color='pink.500'
          size='xl'
        />
      </Stack>
    )
  }

  if (isError) {
    navigate('/signin')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#F4F5F7',
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
