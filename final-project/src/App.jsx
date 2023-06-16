import { useState } from "react";
import { Container4 } from "./assets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
