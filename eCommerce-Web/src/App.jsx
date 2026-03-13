import { HomePage } from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<div>Check out test</div>} />
      </Routes>
    </>
  );
}

export default App;
