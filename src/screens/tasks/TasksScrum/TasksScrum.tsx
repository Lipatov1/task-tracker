import { FC } from 'react'
import ListTasks from '../../../components/ListTasks/ListTasks'
import styles from './TasksScrum.module.css'
import { ITask } from '../../../shared/types/task.types'

interface IList {
  dataSource?: ITask[]
}

const TasksScrum: FC<IList> = ({ dataSource }) => {
  const planedTasks = dataSource?.filter((data) => data.status === 'Запланирована')
  const inProcessTasks = dataSource?.filter((data) => data.status === 'В процессе')
  const readyTasks = dataSource?.filter((data) => data.status === 'Готово')

  return (
    <div className={styles.columns}>
      <ListTasks dataSource={planedTasks} title="Запланирована" />
      <ListTasks dataSource={inProcessTasks} title="В процессе" />
      <ListTasks dataSource={readyTasks} title="Готово" />
    </div>
  )
}

export default TasksScrum
