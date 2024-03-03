import stranahans from '../../assets/images/whiskies/stranahans01.png'

export function Intro() {
  return (
    <section className="bg-intro bg-center bg-no-repeat bg-contain bg-[#D7D5CD] ">
      <div className="container pt-10 pb-32">
        <h2 className="text-center mb-20 text-stone-800">Whiskey of The Month</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 text-stone-800">
          <div className="flex flex-col lg:text-right ">
            <div className="flex-grow ">
              <h4>Some Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quas, eius repellendus.</p>
            </div>
            <div className="flex-grow">
              <h4>Some Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quas, eius repellendus.</p>
            </div>
          </div>
          <div className="text-center mx-auto lg:order-none order-last">
            <img src={stranahans} alt="whiskey of the month" />
            <h4>Stranahan's Blue Peak Whiskey</h4>
          </div>
          <div className="flex flex-col">
            <div className="flex-grow">
              <h4>Some Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quas, eius repellendus.</p>
            </div>
            <div className="flex-grow">
              <h4>Some Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, quas, eius repellendus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
