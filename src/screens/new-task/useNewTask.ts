import { ITaskFormValues } from '@/components/TaskForm/task-form.types'
import { TaskService } from '@/services/task/task.service'
import { getTasksUrl } from '@/configs/api.config'
import { useNavigate } from 'react-router'
import { useMutation } from 'react-query'
import { useMemo } from 'react'

export const useNewTask = () => {
  const navigate = useNavigate()

  const { isSuccess, error, isLoading, mutate } = useMutation(
    ['create task'],
    (data: ITaskFormValues) => TaskService.create(data),
    {
      onSuccess: () => {
        navigate(getTasksUrl())
      },
    }
  )

  return useMemo(
    () => ({
      isSuccess,
      error,
      isLoading,
      mutate,
    }),
    [isSuccess, error, isLoading, mutate]
  )
}
