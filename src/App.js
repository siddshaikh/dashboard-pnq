import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/dashboard";
import Cardview from "./pages/CardView/Cardview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cardview" element={<Cardview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
