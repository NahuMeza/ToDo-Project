export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type todoID = Pick<Todo, 'id'>
export type todoTitle = Pick<Todo, 'title'>

export type ListOfTodos = Todo[]
