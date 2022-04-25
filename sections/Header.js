import Link from 'next/link'
import Button from '../components/Button'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigations = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
  ]

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <Button
          className="bg-gradient-to-r from-[#f85032] to-[#e73827] "
          onClick={() => setTheme('light')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button
          className="bg-gradient-to-r from-[#8cc842] to-[#56ab2f] "
          onClick={() => setTheme('dark')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </Button>
      )
    }
  }

  return (
    <header className="flex h-16 items-center justify-between">
      <ul className="flex gap-4">
        {navigations.map((navigation) => (
          <li key={navigation.label}>
            <Link href={navigation.path}>
              <a className="text-slate-600 transition-all hover:text-slate-800 dark:text-gray-400 dark:hover:text-gray-50">
                {navigation.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {renderThemeChanger()}
    </header>
  )
}

export default Header
