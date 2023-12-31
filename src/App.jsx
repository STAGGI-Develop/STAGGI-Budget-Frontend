import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/layouts/BaseLayout'
import Home from './views/Home'
import Saving from './views/Saving'
import Budget from './views/Budget'
import Search from './views/Search'
import Settings from './views/Settings'
import Signin from './views/Signin'
import Signup from './views/Signup'
import RequireAuth from './components/auth/RequireAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route index element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Home />} />
            <Route path='/goal' element={<Saving />} />
            <Route path='/goal/:id' element={<Saving />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/budget/:id' element={<Budget />} />
            <Route path='/search' element={<Search />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Route>

        {/* Public */}
        <Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
