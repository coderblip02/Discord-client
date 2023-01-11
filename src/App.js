import "./App.css";

import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import MainServer from "./components/MainServer";
import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Username from "./components/Username";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/Main-server"
          element={
            <ProtectedRoute>
              <MainServer />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/username"
          element={
            <ProtectedRoute>
              <Username />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
