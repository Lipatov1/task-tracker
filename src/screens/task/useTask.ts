import { ITaskFormValues } from '../../components/TaskForm/task-form.types'
import { TaskService } from '../../services/task/task.service'
import { getTasksUrl } from '../../configs/api.config'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import dayjs from 'dayjs'

export const useTask = () => {
  const { id: taskId } = useParams()
  const navigate = useNavigate()

  const { isLoading, data: task } = useQuery(
    ['get task', taskId],
    () => TaskService.getById(`${taskId}`),
    {
      select: ({ data }) => data,
    }
  )

  const { mutate } = useMutation(
    'update task',
    (data: ITaskFormValues) => TaskService.update(`${taskId}`, data),
    {
      onSuccess() {
        navigate(getTasksUrl())
      },
    }
  )

  const refactorTask = task && {
    ...task,
    date: dayjs(task.date),
    plannedTime: dayjs(task.plannedTime),
    elapsedTime: task.elapsedTime ? dayjs(task.elapsedTime) : undefined,
  }

  return { isLoading, refactorTask, mutate }
}
