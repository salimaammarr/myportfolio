import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const handleBlockedResource = (event: ErrorEvent | PromiseRejectionEvent) => {
  const errorMessage =
    event instanceof ErrorEvent ? event.message : event.reason?.message || "";
  const fileName = event instanceof ErrorEvent ? event.filename : "";

  if (
    errorMessage.includes("fingerprint.js") ||
    fileName?.includes("fingerprint.js") ||
    errorMessage.includes("ERR_BLOCKED_BY_CLIENT")
  ) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
};

window.addEventListener("error", handleBlockedResource, true);
window.addEventListener("unhandledrejection", handleBlockedResource, true);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
