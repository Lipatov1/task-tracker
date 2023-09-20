import { FC } from 'react'
import { Radio, Button } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { useTasks } from './useTasks'
import TasksTable from './TasksTable/TasksTable'
import TasksShortTable from './TasksShortTable/TasksShortTable'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const options = [
  { label: 'Подробно', value: 'full' },
  { label: 'Кратко', value: 'short' },
  { label: 'Scrum', value: 'scrum' },
]

const Tasks: FC = () => {
  const { isLoading, data, isError, type, setType } = useTasks()

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setType(value)
  }

  return (
    <>
      <Button icon={<PlusOutlined />}>
        <Link to="/task/create">Создать</Link>
      </Button>
      <Radio.Group options={options} onChange={onChange1} optionType="button" />
      {type === 'full' ? (
        <TasksTable tasks={data} />
      ) : type === 'short' ? (
        <TasksShortTable tasks={data} />
      ) : (
        <TasksTable tasks={data} />
      )}
    </>
  )
}

export default Tasks
