import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Signup />} />
      </Routes>
    </Router>
  )
}
export default App
