export const API_URL = `${process.env.REACT_APP_API_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getTasksUrl = () => `/tasks`
export const getTaskUrl = (string: string) => `tasks/${string}`
