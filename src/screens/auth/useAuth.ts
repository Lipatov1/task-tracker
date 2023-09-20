import { useAppSelector } from '../../hooks/useAppSelector'
import { useNavigate } from 'react-router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { IAuthInput } from './auth.types'

export const useAuth = () => {
  const { user, isLoading } = useAppSelector((state) => state.user)
  const { login, register } = useActions()
  const navigate = useNavigate()
  const [type, setType] = useState<'login' | 'register'>('login')

  const onFinish = useCallback(
    (data: IAuthInput) => {
      if (type === 'login') {
        login(data)
      } else if (type === 'register') {
        register(data)
      }
    },
    [login, register, type]
  )

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return useMemo(
    () => ({
      isLoading,
      setType,
      onFinish,
    }),
    [isLoading, setType, onFinish]
  )
}
