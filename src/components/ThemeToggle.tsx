
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch 
        checked={theme === "dark"} 
        onCheckedChange={handleToggle} 
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4" />
    </div>
  );
};

export default ThemeToggle;
