import intro1 from '../../assets/intro/intro01.jpg'
import intro2 from '../../assets/intro/intro02.jpg'
import intro3 from '../../assets/intro/intro03.jpg'
import { Button } from '../Buttons'
import { GlassWater } from 'lucide-react'

export function Intro() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(450px,1fr))] container gap-8 my-20">
      <div>
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
          <img src={intro1} alt="" className="absolute w-full h-full object-cover object-center " />
        </div>
        <h3>We believe in good food and even better company</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, veniam? A, odit modi vel eum corrupti
          perspiciatis enim soluta cupiditate nihil odio sint explicabo incidunt, unde nobis facilis!
        </p>
        <Button variant="outline">Learn More</Button>
      </div>

      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        <img src={intro2} alt="" className="absolute w-full h-full object-cover object-center" />
      </div>

      <div>
        <div className="font-slanted text-8xl text-secondary text-center">
          <p>Whiskey</p>
          <p className="indent-28">Wave</p>
        </div>
        <div className="relative w-full h-[350px] overflow-hidden rounded-lg shadow-lg">
          <img src={intro3} alt="" className="absolute w-full h-full object-cover object-center" />
        </div>
        <div className="w-[80px] h-[80px] rounded-full border-dashed border-2 flex flex-shrink-0 items-center justify-center mx-auto mt-5 border-secondary shadow-lg">
          <GlassWater className="w-[40px] h-[40px]" color="rgb(227 178 60)" />
        </div>
      </div>
    </div>
  )
}
