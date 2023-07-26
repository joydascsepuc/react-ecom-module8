import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage"
import OTPPage from "./Pages/OTPPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/user-login" element={<LoginPage/>} />
        <Route path="/otp" element={<OTPPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App