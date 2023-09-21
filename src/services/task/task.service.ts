import { ITaskFormValues } from '@/components/TaskForm/task-form.types'
import { getTasksUrl, getTaskUrl } from '@/configs/api.config'
import { ITask } from '@/shared/types/task.types'
import { $axios } from '@/api/api'

export const TaskService = {
  async getAll() {
    return $axios.get<ITask[]>(getTasksUrl())
  },

  async getById(id: string) {
    return $axios.get<ITask>(getTaskUrl(id))
  },

  async create(data: ITaskFormValues) {
    return $axios.post<string>(getTasksUrl(), data)
  },

  async update(id: string, data: ITaskFormValues) {
    return $axios.put<string>(getTaskUrl(id), data)
  },
}
