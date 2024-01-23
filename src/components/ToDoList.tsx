import { useEffect, useState } from 'react'
import { useAppSelector } from '../store/store'
import { ToDo } from './ToDo'

export const ToDoList: React.FC = () => {
  const toDo = useAppSelector((state) => state.todo)
  const [filteredToDo, setFilteredToDo] = useState(toDo)
  const filter = useAppSelector((state) => state.filters)
  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredToDo(toDo.filter((item) => item.completed))
        break
      case 'active':
        setFilteredToDo(toDo.filter((item) => !item.completed))
        break
      default:
        setFilteredToDo(toDo)
        break
    }
  }, [filter, toDo])
  return (
      <ul>
      {filteredToDo.length === 0
        ? 'No To Do Items'
        : filteredToDo.map((item) => (
          <li key={item.id}>
              <ToDo key={item.id} todo={item} />
          </li>
        ))}
      </ul>
  )
}
