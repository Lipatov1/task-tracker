import React, { FC } from 'react'
import { useNewTask } from './useNewTask'
import TaskForm from '../../components/TaskForm/TaskForm'
import { ITaskFormValues } from '../../components/TaskForm/task-form.types'

const NewTask: FC = () => {
  const { isSuccess, error, isLoading, mutate } = useNewTask()

  const onFinish = (data: ITaskFormValues) => {
    mutate(data)
  }

  return <TaskForm onFinish={onFinish} />
}

export default NewTask
