import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/Dashboard.jsx";

const App = () => {
  const [state, setState] = useState("light");

  const handleStateChange = () => {
    console.log("Earlier State", state);
    setState(state === "light" ? "dark" : "light");
    console.log("New State", state);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard onStateChange={handleStateChange} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
