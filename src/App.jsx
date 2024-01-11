
import { UserProvider } from './components/Context/UserContext'

import Router from './router/router'
import './App.css'



function App() {

  return (
    <>
    <UserProvider>
      <Router/>
    </UserProvider>
      
    </>
  
  )
}

export default App
