import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getToken } from '../../utils/apiCalls'

const RequireAuth = () => {
  const location = useLocation()
  const token = getToken()

  const content = token ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' state={{ from: location }} />
  )

  return content
}

export default RequireAuth
