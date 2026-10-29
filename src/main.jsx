import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Exercise from "./Exercise.jsx";
import Exam from "./Exam.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Exam />
  </StrictMode>,
);
