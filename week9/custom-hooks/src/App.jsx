import { useEffect, useState } from "react"

const useDebounce = (value, timeout) => {
  const [debouncedValue , setDebouncedVlaue] = useState(value)
  useEffect(() => {
    let timeoutNum = setTimeout(() => {
      setDebouncedVlaue(value)
    },timeout)

    return () => {
      clearTimeout(timeoutNum)
    }
  },[value])

  return debouncedValue

}

function App() {
  const [value , setValue] = useState()
  const debouncedValue = useDebounce(value , 450)

  return <>
    Debounced value is {debouncedValue}
    <input type="text" onChange={e => setValue(e.target.value)} />
  </>
}

export default App