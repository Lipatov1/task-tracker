import NewTask from '../screens/new-task/NewTask'
import Tasks from '../screens/tasks/Tasks'
import Auth from '../screens/auth/Auth'
import Task from '../screens/task/Task'
import { ReactNode } from 'react'

export interface IRoute {
  path: string
  component: ReactNode
}

export enum RouteNames {
  AUTH = 'auth',
  TASKS = 'tasks',
  EDIT_TASKS = 'task/edit/:id',
  CRATE_TASKS = 'task/create',
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.AUTH, component: <Auth /> }]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.TASKS, component: <Tasks /> },
  { path: RouteNames.EDIT_TASKS, component: <Task /> },
  { path: RouteNames.CRATE_TASKS, component: <NewTask /> },
]
