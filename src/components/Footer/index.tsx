import { Facebook, LinkedIn, Language } from '@mui/icons-material'
import { Button } from '../Buttons'

export function Footer() {
  const socialIcons = [
    {
      icon: <Facebook />,
      link: 'https://www.facebook.com',
    },
    {
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com',
    },
    {
      icon: <Language />,
      link: 'https://www.rockymountaincode.com',
    },
  ]

  return (
    <section className="bg-stone-900 text-whiteRock-100 text-center">
      <div className="container p-12">
        <div>
          <img src="#" alt="logo" className="mx-auto" />

          <p className="text-sm">
            123 Alpine Dr | Denver, Colorado 80014 | Phone: (123) 456-7590 | info@whiskeywave.com
          </p>
          <p className="text-sm">Copyright 2024, Whiskey Wave Group. All Rights Reserved</p>
          <p className="text-sm">Website Built By Kendra Mulligan</p>
        </div>
        <div className="flex justify-center ">
          {socialIcons.map((social, index) => (
            <Button key={index} size="icon" className="not-last:mr-3">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
