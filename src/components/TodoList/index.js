import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { todoRemainSelector } from '../../redux/selectors'
import todoListSlice from './todoListSlice'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [todoPrior, setTodoPrior] = useState('Medium')

  const dispatch = useDispatch()
  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPrior,
        completed: false,
      })
    )
    setTodoName('')
    setTodoPrior('Medium')
  }

  const handleTodoNameChanges = e => {
    setTodoName(e.target.value)
  }
  const handleTodoPrior = value => {
    setTodoPrior(value)
  }

  const todoList = useSelector(todoRemainSelector)

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleTodoNameChanges} />
          <Select
            defaultValue='Medium'
            value={todoPrior}
            onChange={handleTodoPrior}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
