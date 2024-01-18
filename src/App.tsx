import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'

const App = (): JSX.Element => {
  return (
    <>
    <Header />
    <ToDoList />
    <Footer/>
    </>
  )
}

export default App
