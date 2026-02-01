import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MemoryRouter } from "react-router-dom";

const isExtension =
  typeof window !== "undefined" &&
  !!window.chrome?.runtime?.id;

if (isExtension) {
  document.documentElement.classList.add("extension");
}

createRoot(document.getElementById("root")!).render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
