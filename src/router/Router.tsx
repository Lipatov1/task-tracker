import PrivateRoute from './PrivateRoute/PrivateRoute'
import NotFound from '../screens/not-found/NotFound'
import NewTask from '../screens/new-task/NewTask'
import { Route, Routes } from 'react-router-dom'
import Tasks from '../screens/tasks/Tasks'
import Auth from '../screens/auth/Auth'
import { Navigate } from 'react-router'
import Task from '../screens/task/Task'
import Layout from '../layout/Layout'
import { FC } from 'react'

const Router: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="tasks" />} />
      <Route path="auth" element={<Auth />} />
      <Route path="tasks" element={<PrivateRoute element={<Tasks />} />} />
      <Route path="task/edit/:id" element={<PrivateRoute element={<Task />} />} />
      <Route path="task/create" element={<PrivateRoute element={<NewTask />} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default Router
