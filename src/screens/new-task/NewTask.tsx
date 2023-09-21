import { ITaskFormValues } from '../../components/TaskForm/task-form.types'
import TaskForm from '../../components/TaskForm/TaskForm'
import { useNewTask } from './useNewTask'
import { FC } from 'react'

const NewTask: FC = () => {
  const { mutate } = useNewTask()

  const onFinish = (data: ITaskFormValues) => {
    mutate(data)
  }

  return <TaskForm onFinish={onFinish} />
}

export default NewTask
