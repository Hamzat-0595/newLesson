import "./App.css";
import Header from "./pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages/HomePages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
      </Routes>
    </div>
  );
}

export default App;
