import { ITask } from '../../../shared/types/task.types'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import styles from './ListTasks.module.css'
import { Link } from 'react-router-dom'
import { Card, List } from 'antd'
import { FC } from 'react'

interface IList {
  dataSource?: ITask[]
  title: string
}

const ListTasks: FC<IList> = ({ dataSource, title }) => (
  <div>
    <Title className={styles.title} level={3}>
      {title}
    </Title>
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        xxl: 1,
      }}
      pagination={{
        pageSize: 15,
        align: 'center',
        showSizeChanger: false,
        hideOnSinglePage: true,
      }}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/task/edit/${item.id}`}>
            <Card className={styles.card} type="inner" hoverable title={item.name}>
              <Paragraph>Приоритет: {item.priority}</Paragraph>
              <Paragraph>{item.description}</Paragraph>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  </div>
)

export default ListTasks
