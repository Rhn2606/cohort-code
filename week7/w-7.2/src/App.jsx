
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/count"

function App() {
  return <div>
    <RecoilRoot>
    <Count />
    </RecoilRoot>
  </div>

}

function Count() {
return <div>
  <CountRenderer />
  <Buttons />
</div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
    {count}
    </b>
   <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {(count % 2 == 0) ? "It is Even" : "It is Odd"}
  </div>
}

function Buttons() {
  const [count , setCount] = useRecoilState(countAtom)
   return <div>
  <button onClick={() => {
    setCount(count + 1)
    }}>Increase</button>

  <button onClick={() => {
    setCount(count - 1)
    }}>Decrease</button>

  </div>

}

export default App