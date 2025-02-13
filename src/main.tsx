import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

function ThemeInitializer() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeInitializer /> {/* This ensures the theme is applied on load */}
    <App />
  </React.StrictMode>
)
