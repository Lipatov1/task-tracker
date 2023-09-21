import { FC } from 'react'
import { Table } from 'antd'
// import { columns } from './table.data'
import { ITask } from '../../../shared/types/task.types'
import { DataType } from './table.types'
import { extractDateFromDateTime, extractTimeFromDateTime } from '../../../utils/date/convertDate'
import type { ColumnsType } from 'antd/es/table'

interface ITasksTable {
  tasks: ITask[] | undefined
  columns: ColumnsType<DataType>
}

const TasksTable: FC<ITasksTable> = ({ tasks, columns }) => {
  const data = tasks?.map(
    (task): DataType => ({
      key: task.id,
      name: task.name,
      description: task.description,
      status: task.status,
      priority: task.priority,
      date: extractDateFromDateTime(task.date),
      plannedTime: extractTimeFromDateTime(task.plannedTime),
      elapsedTime: extractTimeFromDateTime(task.elapsedTime),
    })
  )

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['bottomCenter'],
        showSizeChanger: false,
      }}
      scroll={{ x: true }}
    />
  )
}

export default TasksTable
