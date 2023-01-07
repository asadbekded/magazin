import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Admin } from "./pages/Admin/Admin";
import { Register } from "./pages/Register/Register";
import { Client } from "./pages/Client/Client";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Client/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}
export default App;