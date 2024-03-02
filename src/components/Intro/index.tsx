import { GlassWater, Hop, Martini } from 'lucide-react'

export function Intro() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(450px,1fr))] container gap-8 mt-20 mb-32 ">
      <div>
        <div className="w-[80px] h-[80px] rounded-full border-dashed border-2 flex flex-shrink-0 items-center justify-center mx-auto mt-5 border-secondary shadow-lg mb-10">
          <GlassWater className="w-[40px] h-[40px]" color="rgb(227 178 60)" />
        </div>
        <div className="h-72 bg-[url('../../assets/intro/intro01.jpg')] bg-cover bg-norepeat bg-center rounded-lg shadow-lg " />
      </div>
      <div>
        <div className="h-72 bg-[url('../../assets/intro/intro02.jpg')] bg-cover bg-norepeat bg-center rounded-lg shadow-lg " />
        <div className="w-[80px] h-[80px] rounded-full border-dashed border-2 flex flex-shrink-0 items-center justify-center mx-auto mt-5 border-secondary shadow-lg mb-10">
          <Hop className="w-[40px] h-[40px]" color="rgb(227 178 60)" />
        </div>
      </div>
      <div>
        <div className="w-[80px] h-[80px] rounded-full border-dashed border-2 flex flex-shrink-0 items-center justify-center mx-auto mt-5 border-secondary shadow-lg mb-10">
          <Martini className="w-[40px] h-[40px]" color="rgb(227 178 60)" />
        </div>
        <div className="h-72 bg-[url('../../assets/intro/intro03.jpg')] bg-cover bg-norepeat bg-center rounded-lg shadow-lg " />
      </div>
    </div>
  )
}
