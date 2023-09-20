import { QueryClient, QueryClientProvider } from 'react-query'
import PrivateRoute from './ui/private-route/PrivateRoute'
import { Routes, Route } from 'react-router-dom'
import NewTask from './screens/new-task/NewTask'
import locale from 'antd/es/locale/ru_RU'
import Tasks from './screens/tasks/Tasks'
import { Navigate } from 'react-router'
import Auth from './screens/auth/Auth'
import Task from './screens/task/Task'
import { ConfigProvider } from 'antd'
import Layout from './layout/Layout'
import 'antd/dist/reset.css'
import { FC } from 'react'
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App: FC = () => {
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorBgLayout: '#12121a',
          colorBgBase: '#262631',
          colorTextBase: '#ffffff',
          colorPrimary: '#7f6fd1',
          fontSize: 18,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="tasks" />} />
            <Route path="auth" element={<Auth />} />
            <Route path="tasks" element={<PrivateRoute element={<Tasks />} />} />
            <Route path="task/edit/:id" element={<PrivateRoute element={<Task />} />} />
            <Route path="task/create" element={<PrivateRoute element={<NewTask />} />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
