import { useRecoilValue, RecoilRoot } from 'recoil'
import { jobAtom, msgAtom, networkAtom, notiAtom } from './atoms'
import { useMemo } from 'react'

function App() {
  return <RecoilRoot>
    <Main />
  </RecoilRoot>
  
}

function Main() {
  const networkNotiCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobAtom)
  const notiCount = useRecoilValue(notiAtom)
  const msgCount = useRecoilValue(msgAtom)

  const totalNotifCount = useMemo(() => {
      return networkNotiCount + jobCount + notiCount + msgCount
  },[networkNotiCount, jobCount, notiCount, msgCount])

  return <>
  <button>Home</button>


  <button>My Network({networkNotiCount >= 100 ? "99+" : newtorkNotiCount})</button>
  <button>Jobs({jobCount})</button>
  <button>Messages({msgCount})</button>
  <button>Notification({notiCount})</button>

  <button>Me ({totalNotifCount})</button>
  </>
}
export default App