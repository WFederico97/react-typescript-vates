import Todos from './components/Todos'
import Todo from './models/todo'
import './App.css'

function App() {

  const todos = [
    new Todo('Buy a phone'),
    new Todo('Learn Typescript'),
    new Todo('Get paid'),
    new Todo('Flirt'),
    new Todo('Shop Groceries'),
  ];

  return (
    <>
      <div>
        <Todos items={todos}/>
      </div>
    </>
  )
}

export default App
