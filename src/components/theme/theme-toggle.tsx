import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg ${
          theme === "light" ? "bg-gray-200 dark:bg-gray-700" : ""
        }`}
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg ${
          theme === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""
        }`}
      >
        <Moon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-lg ${
          theme === "system" ? "bg-gray-200 dark:bg-gray-700" : ""
        }`}
      >
        <Laptop className="h-5 w-5" />
      </button>
    </div>
  )
}