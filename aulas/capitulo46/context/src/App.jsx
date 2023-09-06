import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
      <h1>Context</h1>
      <Outlet />
    </div>
  )
}

export default App
