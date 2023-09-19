import { useActions } from '../../../hooks/useActions'
import { Button, Form, Input, Card } from 'antd'
import { useAuth } from '../../../hooks/useAuth'
import { IAuthInput } from './auth.types'
import styles from './Auth.module.css'
import { FC, useState } from 'react'

type FieldType = {
  email?: string
  password?: string
}

const Auth: FC = () => {
  const { isLoading } = useAuth()

  const [type, setType] = useState<'login' | 'register'>('login')

  const { login, register } = useActions()

  const onFinish = (data: IAuthInput) => {
    if (type === 'login') {
      login(data)
    } else if (type === 'register') {
      register(data)
    }
  }

  return (
    <Card className={styles.card}>
      <Form
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
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

        <Form.Item>
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
