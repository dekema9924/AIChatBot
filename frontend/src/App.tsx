import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ChatBot from "./pages/ChatBot"


function App() {

  return (
    <>
      <Header />
      <div className=" mx-auto  w-11/12 mt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat" element={<ChatBot />} />

        </Routes>
      </div>
    </>
  )
}

export default App
