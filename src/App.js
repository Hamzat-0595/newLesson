import "./App.css";
import Header from "./pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages/HomePages";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="category/:_id" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
