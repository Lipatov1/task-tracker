import { useAppSelector } from '../../hooks/useAppSelector'
import { privateRoutes, publicRoutes } from '../../router'
import NotFound from '../../screens/not-found/NotFound'
import { Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import { Navigate } from 'react-router'
import { FC } from 'react'

const AppRouter: FC = () => {
  const { user } = useAppSelector((state) => state.user)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {user
          ? privateRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))
          : publicRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
        <Route index element={<Navigate to="tasks" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter