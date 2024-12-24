import { useEffect } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import Nav from './widgets/Nav/Nav'
import useUserStore from './shared/store/useUserStore'
import { useNavigate } from 'react-router'

function App() {
  const setMounted = useUserStore(state => state.setMounted)
  const user = useUserStore(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    setMounted()
  }, [setMounted])

  useEffect(() => {
    if (user) {
      navigate('/warehouse')
    }
  }, [user])

  return (
    <>
      <Nav />
      <AppRouter />
    </>
  )
}

export default App
