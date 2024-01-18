import { useAppSelector } from '../store/store'
import { ToDo } from './ToDo'

export const ToDoList: React.FC = () => {
  const toDo = useAppSelector((state) => state.todo)
  return (
        <>
        <ul>
        {toDo.length === 0
          ? 'No To Do Items'
          : toDo.map((item) => (
            <li key={item.id}>
                <ToDo key={item.id} todo={item} />
            </li>
          ))}
        </ul>
        </>
  )
}
