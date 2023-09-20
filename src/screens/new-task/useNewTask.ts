import { useMutation } from 'react-query'
import { TaskService } from '../../services/task/task.service'
import { useNavigate } from 'react-router'
import { getTasksUrl } from '../../configs/api.config'
import { useMemo } from 'react'
import { ITaskFormValues } from '../../components/TaskForm/task-form.types'

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
