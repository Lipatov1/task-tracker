import { QueryClient, QueryClientProvider } from 'react-query'
import AppRouter from '@/components/AppRouter/AppRouter'
import locale from 'antd/es/locale/ru_RU'
import { ConfigProvider } from 'antd'
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
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
