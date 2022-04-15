import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'do ecercise', completed: false, priority: 'Medium' },
    { id: 2, name: 'play games', completed: true, priority: 'Low' },
    { id: 3, name: 'learning st', completed: true, priority: 'High' },
    { id: 4, name: 'have lunch', completed: true, priority: 'High' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      //   const currentTodo = state.find(todo => todo.id === action.payload)
      //   currentTodo.completed = !currentTodo.completed
      const currentTodo = state.filter(todo => todo.id === action.payload)
      currentTodo[0].completed = !currentTodo[0].completed
    },
  },
})
export default todoListSlice
