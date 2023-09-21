import { Button, Form, Input, Card } from 'antd'
import styles from './Auth.module.css'
import { useAuth } from './useAuth'
import { FC } from 'react'

type FieldType = {
  email?: string
  password?: string
}

const Auth: FC = () => {
  const { onFinish, setType } = useAuth()

  return (
    <Card className={styles.card}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Пожалуйста введите Email' }]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите пароль' }]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        <Form.Item className={styles.buttons}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => setType('login')}
            className={styles.button}
          >
            Войти
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            onClick={() => setType('register')}
            className={styles.buttonDefault}
          >
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Auth
