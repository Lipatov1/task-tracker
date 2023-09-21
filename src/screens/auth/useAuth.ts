import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useActions } from '../../hooks/useActions'
import { useNavigate } from 'react-router'
import { IAuthInput } from './auth.types'

export const useAuth = () => {
  const { user, isLoading, error } = useAppSelector((state) => state.user)
  const { login, register } = useActions()
  const navigate = useNavigate()
  const [type, setType] = useState('login')

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
      error,
    }),
    [isLoading, setType, onFinish, error]
  )
}
