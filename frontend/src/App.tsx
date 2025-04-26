import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Home from "./pages/Home/Home"


function App() {

  return (
    <>
      <Header />
      <div className=" mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  )
}

export default App
