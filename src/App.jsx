import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/user-login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App