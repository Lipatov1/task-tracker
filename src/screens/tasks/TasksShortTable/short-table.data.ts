import type { ColumnsType } from 'antd/es/table'
import { DataType } from './short-table.types'

export const columns: ColumnsType<DataType> = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: [
      {
        text: 'Запланирована',
        value: 'Запланирована',
      },
      {
        text: 'В процессе',
        value: 'В процессе',
      },
      {
        text: 'Готово',
        value: 'Готово',
      },
    ],
    onFilter: (value, record) => record.status == value,
  },
  {
    title: 'Приоритет',
    dataIndex: 'priority',
    key: 'priority',
    align: 'center',
    sorter: (a, b) => a.status.localeCompare(b.status),
    filters: [
      {
        text: 'Низкий',
        value: 'Низкий',
      },
      {
        text: 'Средний',
        value: 'Средний',
      },
      {
        text: 'Высокий',
        value: 'Высокий',
      },
    ],
    onFilter: (value, record) => record.priority == value,
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
]
