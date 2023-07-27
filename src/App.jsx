import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage"
import OTPPage from "./Pages/OTPPage"
import CartPage from "./Pages/CartPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/user-login" element={<LoginPage/>} />
        <Route path="/otp" element={<OTPPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App