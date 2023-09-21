import type { ColumnsType } from 'antd/es/table'
import { EyeOutlined } from '@ant-design/icons'
import { DataType } from './table.types'
import { Link } from 'react-router-dom'
import React from 'react'

export const columns: ColumnsType<DataType> = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
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
  {
    title: 'Планируемое время',
    dataIndex: 'plannedTime',
    key: 'plannedTime',
    align: 'center',
  },
  {
    title: 'Затраченное время',
    dataIndex: 'elapsedTime',
    key: 'elapsedTime',
    align: 'center',
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Link to={`/task/edit/${record.key}`}>
        <EyeOutlined />
      </Link>
    ),
  },
]
