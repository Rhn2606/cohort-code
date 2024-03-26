import { useState } from 'react'

import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todo'

function App() {
  const [Todos, setTodos] = useState([]);

  return (
    
      <div>
        <CreateTodo />
        <Todos todos = {[
          {
            title : "asd",
            description : "asdsaad",
            completed : false
          },
          {
            title : "asd",
            description : "asdsaad",
            completed : false
          }

        ]} />
      </div>
      
    
  )
}

export default App
