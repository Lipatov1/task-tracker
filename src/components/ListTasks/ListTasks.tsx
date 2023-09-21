import { IDataSource } from './list-tasks.types'
import styles from './ListTasks.module.css'
import { Link } from 'react-router-dom'
import { Card, List } from 'antd'
import { FC } from 'react'
import { ITask } from '../../shared/types/task.types'
import Title from 'antd/es/typography/Title'

interface IList {
  dataSource?: ITask[]
  title: string
}

const ListTasks: FC<IList> = ({ dataSource, title }) => (
  <div className={styles.column}>
    <Title className={styles.title} level={3}>
      {title}
    </Title>
    <List
      pagination={{
        pageSize: 15,
        align: 'center',
        showSizeChanger: false,
      }}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item className={styles.link}>
          <Link to={`/task/edit/${item.id}`}>
            {/*<Card className={styles.card} type="inner" hoverable>*/}
            {/*  /!*<Card.Meta title={item.name} description={item.description} />*!/*/}
            {/*</Card>*/}
            <Card className={styles.card} type="inner" hoverable title={item.name}>
              {item.description}
            </Card>
          </Link>
        </List.Item>
      )}
    />
  </div>
)

export default ListTasks
