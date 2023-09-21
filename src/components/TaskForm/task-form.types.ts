import { Dayjs } from 'dayjs'

export interface ITaskFormValues {
  id: number
  name: string
  description: string
  status: string
  priority: string
  date: Dayjs
  plannedTime: Dayjs
  elapsedTime?: Dayjs
}

export interface ITaskForm {
  initialValues?: ITaskFormValues
  onFinish: (data: ITaskFormValues) => void
}
