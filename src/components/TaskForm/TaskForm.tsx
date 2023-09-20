import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd'
import { ITaskForm } from './task-form.types'
import { FC, useEffect } from 'react'

const TaskForm: FC<ITaskForm> = ({ initialValues, onFinish }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(initialValues)
  }, [form, initialValues])

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFinish}>
      <Form.Item
        label="Название"
        name="name"
        rules={[{ required: true, message: 'Пожалуйста введите Email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Описание"
        name="description"
        rules={[{ required: true, message: 'Пожалуйста введите пароль' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Статус"
        name="status"
        rules={[{ required: true, message: 'Пожалуйста выберите статус' }]}
      >
        <Select>
          <Select.Option value="Запланирована">Запланирована</Select.Option>
          <Select.Option value="В процессе">В процессе</Select.Option>
          <Select.Option value="Готово">Готово</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Приоритет"
        name="priority"
        rules={[{ required: true, message: 'Пожалуйста выберите приоритет' }]}
      >
        <Select>
          <Select.Option value="Низкий">Низкий</Select.Option>
          <Select.Option value="Средний">Средний</Select.Option>
          <Select.Option value="Высокий">Высокий</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Дата"
        name="date"
        rules={[{ required: true, message: 'Пожалуйста выберите дату' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Планируемое время"
        name="plannedTime"
        rules={[{ required: true, message: 'Пожалуйста выберите планируемое время' }]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item label="Затраченное время" name="elapsedTime">
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TaskForm
