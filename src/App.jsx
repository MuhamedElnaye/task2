import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={"This Page Not Found"} />
      </Routes>
    </>
  );
}

export default App;
