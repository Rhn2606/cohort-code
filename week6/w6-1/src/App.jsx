import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then( async function(res){
      const json = await res.json()
      setTodos(json.todos)
    })
  }, 300)
  }, [])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div> 
  
} 

function Todo({title , description}) {
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
}
 
export default App
  