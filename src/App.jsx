import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './components/layouts/BaseLayout'
import Home from './views/Home'
import Saving from './views/Saving'
import Budget from './views/Budget'
import Search from './views/Search'
import Settings from './views/Settings'
import Signin from './views/Signin'
import Signup from './views/Signup'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Home />} />
            <Route path='/saving' element={<Saving />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/search' element={<Search />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
          <Route>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
