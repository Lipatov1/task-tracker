import { FC } from 'react'
import { useTask } from './useTask'
import TaskForm from '../../components/TaskForm/TaskForm'
import { ITaskFormValues } from '../../components/TaskForm/task-form.types'

const Task: FC = () => {
  const { refactorTask, mutate } = useTask()

  const onFinish = (data: ITaskFormValues) => {
    mutate(data)
  }

  return <TaskForm initialValues={refactorTask} onFinish={onFinish} />
}

export default Task
