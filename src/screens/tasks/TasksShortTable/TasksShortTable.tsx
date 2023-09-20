import { ITask } from '../../../shared/types/task.types'
import { DataType } from './short-table.types'
import { columns } from './short-table.data'
import { Table } from 'antd'
import { FC } from 'react'
import { extractDateFromDateTime } from '../../../utils/date/convertDate'

interface ITasksTable {
  tasks: ITask[] | undefined
}

const TasksShortTable: FC<ITasksTable> = ({ tasks }) => {
  const data = tasks?.map(
    (task): DataType => ({
      key: task.id,
      name: task.name,
      status: task.status,
      priority: task.priority,
      date: extractDateFromDateTime(task.date),
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

export default TasksShortTable
