import { Button } from '../Buttons'

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
  return (
    <header className="bg-transparent z-10 container p-8 absolute top-0 left-1/2 -translate-x-1/2">
      <div>
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
      </div>
    </header>
  )
}
