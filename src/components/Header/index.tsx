import { useEffect, useState } from 'react'
import MobileNav from '../MobileNav'

const navLinks = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Our Story',
    url: '/about',
  },
  {
    text: 'Whiskeys',
    url: '/whiskeys',
  },
  {
    text: 'Recipes',
    url: '/recipes',
  },
  {
    text: 'Awards',
    url: '/awards',
  },
  {
    text: 'Contact Us',
    url: '/contact',
  },
]

export function Header() {
  const [screenIsSmall, setScreenIsSmall] = useState(isScreenSmall())

  function isScreenSmall() {
    return window.innerWidth < 1024
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenIsSmall(isScreenSmall())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="bg-transparent z-10  absolute top-0 left-1/2 -translate-x-1/2 w-full">
      {!screenIsSmall && (
        <div className="bg-yellow-200 py-[1px]">
          <p className="text-xs font-bold">
            123 Alpine Dr | Denver, Colorado 80014 | Phone: (123) 456-7590 | info@whiskeywave.com
          </p>
        </div>
      )}
      <div className="container py-8">
        {!screenIsSmall && (
          <nav className="">
            <ul className="flex justify-around items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-whiteRock-100 hover:text-whiteRock-50 font-bold font-headings">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {isScreenSmall() && <MobileNav links={navLinks} />}
      </div>
    </header>
  )
}
