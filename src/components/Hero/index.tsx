import { Header } from '../Header'
import wwLogo from '../../assets/images/logos/wwLogo.png'
import footerLogo from '../../assets/images/logos/footerLogo.png'

export function Hero() {
  return (
    <div className="bg-hero h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center relative  text-center">
      <Header />
      <img src={footerLogo} alt="Whiskey Wave Logo" className="max-w-[150px] mx-auto" />
      <h1 className="text-whiteRock-100 text-8xl">Whiskey Wave</h1>
      <h3 className="text-whiteRock-100 font-copy">Cocktails | Celebrations | Relaxation</h3>
    </div>
  )
}
