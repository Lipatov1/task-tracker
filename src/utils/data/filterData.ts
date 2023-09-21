import { ITask } from '../../shared/types/task.types'

export const filterDataByStatus = (dataSource: ITask[] | undefined, status: string) => {
  return dataSource
    ?.filter((data) => data.status === status)
    .sort((a, b) => b.priority.length - a.priority.length)
}
