import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { CTA } from './components/CTA'
import { ImageSlider } from './components/ImageSlider'
import { Footer } from './components/Footer'

function Home() {
  return (
    <div className="">
      <Hero />
      <Intro />
      <CTA />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default Home
