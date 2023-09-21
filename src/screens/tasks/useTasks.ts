import { TaskService } from '../../services/task/task.service'
import { useCallback, useMemo, useState } from 'react'
import { columns } from './TasksTable/table.data'
import type { RadioChangeEvent } from 'antd'
import { useQuery } from 'react-query'

export const useTasks = () => {
  const [type, setType] = useState('full')
  const [filteredColumns, setFilteredColumns] = useState(columns)

  const queryData = useQuery(['tasks list'], () => TaskService.getAll(), {
    select: ({ data }) => data,
  })

  const handleTypeChange = useCallback(({ target: { value } }: RadioChangeEvent) => {
    setType(value)

    if (value === 'short') {
      setFilteredColumns(
        columns.filter(
          (col) =>
            col.key !== 'description' && col.key !== 'plannedTime' && col.key !== 'elapsedTime'
        )
      )
    } else {
      setFilteredColumns(columns)
    }
  }, [])

  return useMemo(
    () => ({
      ...queryData,
      type,
      setType,
      filteredColumns,
      handleTypeChange,
    }),
    [queryData, type, setType, filteredColumns, handleTypeChange]
  )
}
