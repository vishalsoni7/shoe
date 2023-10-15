import { Route, Routes } from "react-router-dom";

import { Header } from "./pages/Header";
import { Landing } from "./pages/Landing";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
