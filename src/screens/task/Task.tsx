import { ITaskFormValues } from '../../components/TaskForm/task-form.types'
import TaskForm from '../../components/TaskForm/TaskForm'
import { useTask } from './useTask'
import { FC } from 'react'
import Spinner from '../../ui/Spinner/Spinner'

const Task: FC = () => {
  const { isLoading, refactorTask, mutate } = useTask()

  if (isLoading) {
    return <Spinner />
  }

  const onFinish = (data: ITaskFormValues) => {
    mutate(data)
  }

  return <TaskForm initialValues={refactorTask} onFinish={onFinish} />
}

export default Task
