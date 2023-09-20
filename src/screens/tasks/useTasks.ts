import { useMutation, useQuery } from 'react-query'
import { TaskService } from '../../services/task/task.service'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

export const useTasks = () => {
  const [type, setType] = useState('full')
  const navigate = useNavigate()

  const queryData = useQuery(['tasks list'], () => TaskService.getAll(), {
    select: ({ data }) => data,
  })

  return useMemo(
    () => ({
      ...queryData,
      type,
      setType,
    }),
    [queryData, type, setType]
  )
}
