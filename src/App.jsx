import { useEffect } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import Nav from './widgets/Nav/Nav'
import useUserStore from './shared/store/useUserStore'
import { useNavigate } from 'react-router'
import { Toaster } from 'react-hot-toast'
import $api from './shared/lib/$api'
import { Footer } from './widgets/Footer'

function App() {
  const setMounted = useUserStore((state) => state.setMounted)
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    $api
      .get('/me')
      .then(({ data }) => {
        setUser(data)
      })
      .catch(() => {
        setMounted()
      })
  }, [])

  return (
    <>
      <Nav />
      <AppRouter />
      <Footer />
      <Toaster
        position="bottom-right"
        containerClassName="!z-10 mb-10 mr-10"
        containerStyle={{
          inset: 0,
        }}
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'hsla(var(--foreground-1), 1)',
            color: 'hsla(var(--primary), 1)',
            padding: '1rem',
            minWidth: '300px',
            gap: '0.75rem',
          },
          success: {
            
          },
          error: {

          },
        }}
      />
    </>
  )
}

export default App
