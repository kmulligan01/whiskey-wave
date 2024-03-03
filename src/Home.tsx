import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { CTA } from './components/CTA'
import { ImageSlider } from './components/ImageSlider'
import { Footer } from './components/Footer'
import { WhiskeyInfoProvider } from './contexts/WhiskeyInfoContext'

function Home() {
  return (
    <div className="">
      <WhiskeyInfoProvider>
        <Hero />
        <Intro />
        <CTA />
        <ImageSlider />
        <Footer />
      </WhiskeyInfoProvider>
    </div>
  )
}

export default Home
