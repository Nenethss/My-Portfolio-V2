import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: "#333",
          color: "#fff",
          fontSize: "14px",
        },
        icon: null,
        success: {
          icon: null,
          style: {
            background: "#3b82f6",
          },
        },
        error: {
          icon: null,
          style: {
            background: "#ef4444",
          },
        },
        loading: {
          icon: null,
        },
      }}
    />
  </StrictMode>
);
