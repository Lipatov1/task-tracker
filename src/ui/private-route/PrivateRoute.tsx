import { useAppSelector } from '../../hooks/useAppSelector'
import { Navigate } from 'react-router'
import { FC } from 'react'

interface IPrivateRoute {
  element: JSX.Element
}

const PrivateRoute: FC<IPrivateRoute> = ({ element }) => {
  const { user } = useAppSelector((state) => state.user)

  return user ? element : <Navigate to="/auth" />
}

export default PrivateRoute
