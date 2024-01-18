import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Todo, type ListOfTodos, type todoID, type todoTitle } from '../../types'

const obtenerLocalStorage = (): ListOfTodos | null => {
  const todos = localStorage.getItem('todolist')
  if (todos !== null) {
    return JSON.parse(todos)
  }
  return null
}
const almacenarLocalStorage = (state: ListOfTodos): void => {
  localStorage.setItem('todolist', JSON.stringify(state))
}

const initialState: ListOfTodos = obtenerLocalStorage() ?? []

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<todoTitle>) => {
      state.push({ id: state.length + 1, title: action.payload.title, completed: false })
      almacenarLocalStorage(state)
    },
    removeToDo: (state, action: PayloadAction<todoID>) => {
      const newState = state.filter((todo) => todo.id !== action.payload.id)
      almacenarLocalStorage(newState)
      return newState
    },
    toggleComplete: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = !state[index].completed
      almacenarLocalStorage(state)
    }
  }
})

export const { addToDo, removeToDo, toggleComplete } = toDoSlice.actions
export default toDoSlice.reducer
