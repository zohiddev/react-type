import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/scss/main.scss";

ReactDOM.createRoot(document.querySelector(".wrapper") as HTMLElement).render(
    <App />
);
