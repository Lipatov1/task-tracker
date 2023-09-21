import { options } from '../../constants/options'
import TasksTable from './TasksTable/TasksTable'
import { PlusOutlined } from '@ant-design/icons'
import Spinner from '../../ui/spinner/Spinner'
import Error from '../../ui/error/Error'
import { Link } from 'react-router-dom'
import styles from './Tasks.module.css'
import { useTasks } from './useTasks'
import { Radio, Button } from 'antd'
import { FC } from 'react'
import TasksScrum from './TasksScrum/TasksScrum'

const Tasks: FC = () => {
  const { isLoading, data, isError, type, filteredColumns, handleTypeChange } = useTasks()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error text="Ошибка загрузки данных" />
  }

  return (
    <>
      <div className={styles.actions}>
        <Button icon={<PlusOutlined />}>
          <Link to="/task/create">Создать</Link>
        </Button>
        <Radio.Group
          value={type}
          options={options}
          onChange={handleTypeChange}
          optionType="button"
        />
      </div>

      {type === 'scrum' ? (
        <TasksScrum dataSource={data} />
      ) : (
        <TasksTable tasks={data} columns={filteredColumns} />
      )}
    </>
  )
}

export default Tasks
