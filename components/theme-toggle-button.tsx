import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index'

const themes = ['light', 'dark']

export default function ThemeToggle() {
  //TODO: create Theme-Toggle Button
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'light'
    }
    return 'dark'
  })

  const toggleItem = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = window.document.documentElement
    console.log(root)
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }

    console.log(root)
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  console.log(theme)
  return isMounted ? (
    <div className='inline-flex items-center p-[1px] rounded-3xl bg-purple-300 dark:bg-zinc-600'>
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-white text-black' : ''
            } cursor-pointer rounded-3xl p-1`}
            onClick={toggleItem}
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
