import ListTasks from '../../../components/ListTasks/ListTasks'
import { ITask } from '../../../shared/types/task.types'
import styles from './TasksScrum.module.css'
import { FC } from 'react'
import { filterDataByStatus } from '../../../utils/data/filterData'

interface IList {
  data?: ITask[]
}

const TasksScrum: FC<IList> = ({ data }) => (
  <div className={styles.columns}>
    <ListTasks dataSource={filterDataByStatus(data, 'Запланирована')} title="План" />
    <ListTasks dataSource={filterDataByStatus(data, 'В процессе')} title="В процессе" />
    <ListTasks dataSource={filterDataByStatus(data, 'Готово')} title="Готово" />
  </div>
)

export default TasksScrum
