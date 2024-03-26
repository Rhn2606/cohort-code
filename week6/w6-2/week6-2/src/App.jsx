import { useEffect, useState} from "react"
import axios from "axios"

function App() {

  const [selected, setSelected] = useState(1)

  return <div>
    <button onClick={function() {
      setSelected(1);
    }}>1</button>
    <button onClick={function() {
      setSelected(2);
    }}>2</button>
    <button onClick={function() {
      setSelected(3);
    }}>3</button>
    <button onClick={function() {
      setSelected(4);
    }}>4</button>
    

    <Todo id={selected} />
  </div>
}

function Todo({id}){
  const [todo, setTodo] = useState([])

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(res) {
      setTodo(res.data.todo)
    })
  }, [id])

  return <div>
    Id : {id}
    <h2>{todo.title}</h2>
    <h4>{todo.description}</h4>
  </div>
}

export default App
