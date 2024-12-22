import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import ChatRoom from "./pages/ChatRoom"
import Login from "./pages/Login"
import { PrivateRoute } from "./routes/PrivateRoute"
import {AuthProvider} from "./context/AuthContext"

// import Login from "./pages/Login"

function App() {


  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
