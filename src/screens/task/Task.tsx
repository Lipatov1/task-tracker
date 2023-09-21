import { ITaskFormValues } from '@/components/TaskForm/task-form.types'
import TaskForm from '@/components/TaskForm/TaskForm'
import { useTask } from './useTask'
import { FC } from 'react'

const Task: FC = () => {
  const { refactorTask, mutate } = useTask()

  const onFinish = (data: ITaskFormValues) => {
    mutate(data)
  }

  return <TaskForm initialValues={refactorTask} onFinish={onFinish} />
}

export default Task
