import { addToDo } from '../store/reducers/toDoReducer'
import { useAppDispatch } from '../store/store'

export const Header: React.FC = () => {
  const appDispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const input = e.currentTarget[0] as HTMLInputElement
    appDispatch(addToDo({ title: input.value }))
    input.value = ''
  }

  return (
        <header>
            <h1>My To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit">Add</button>
            </form>
        </header>
  )
}
