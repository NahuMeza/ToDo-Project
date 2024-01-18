import { removeToDo, toggleComplete } from '../store/reducers/toDoReducer'
import { useAppDispatch } from '../store/store'
import { type Todo } from '../types'

interface Props {
  todo: Todo
}

export const ToDo: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch()
  return (
        <div className={todo.completed ? 'completed' : ''}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => { dispatch(toggleComplete(todo)) }}
            />
            <label>{todo.title}</label>
            <button onClick={() => dispatch(removeToDo({ id: todo.id }))}>Delete</button>
        </div>
  )
}
