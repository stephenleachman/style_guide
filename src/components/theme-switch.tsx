'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggler() {

  const { theme, setTheme } = useTheme()
  const systemTheme = 'system';
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <>
      {currentTheme === 'dark' ? (
        <button
          className="text-text-link"
          onClick={() => setTheme('light')}
        >
          {' '}
          <FaSun />

        </button>
      ) : (
        <button
        className="text-text-link"
        onClick={() => setTheme('dark')}
      >
        {' '}
        <FaMoon />
        </button>
      )}
    </>  
  )
}

export default ThemeToggler