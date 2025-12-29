'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 1V2.5M8 13.5V15M15 8H13.5M2.5 8H1M12.7 12.7L11.6 11.6M4.4 4.4L3.3 3.3M12.7 3.3L11.6 4.4M4.4 11.6L3.3 12.7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8.5C13.9 10.9 12.6 13 10.6 14.2C8.6 15.4 6.1 15.5 4 14.5C1.9 13.5 0.5 11.5 0.1 9.2C-0.3 6.9 0.5 4.5 2.2 2.9C2.5 2.6 2.9 2.7 3 3.1C3.1 3.5 3.1 3.9 3.2 4.3C3.6 6.5 5.1 8.3 7.2 9C9.3 9.7 11.6 9.3 13.3 7.9C13.6 7.7 14 7.8 14.1 8.2C14.1 8.3 14 8.4 14 8.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}
