import { Button, Form, Input, Card, Typography } from 'antd'
import styles from './Auth.module.css'
import { useAuth } from './useAuth'
import { FC } from 'react'

const Auth: FC = () => {
  const { onFinish, setType, isLoading, error } = useAuth()

  return (
    <Card className={styles.card}>
      <Form disabled={isLoading} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Пожалуйста введите Email' }]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста введите пароль' }]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        {error && <Typography.Text type="danger">{error}</Typography.Text>}

        <Form.Item className={styles.buttons}>
          <Button type="primary" htmlType="submit" onClick={() => setType('login')}>
            Войти
          </Button>

          <Button className={styles.button} htmlType="submit" onClick={() => setType('register')}>
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Auth
