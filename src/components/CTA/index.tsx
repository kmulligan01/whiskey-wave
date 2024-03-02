import { MoveRight } from 'lucide-react'
import { Button } from '../Buttons'
import { exploreContent } from '../../data/content'

export function CTA() {
  return (
    <div className="bg-cta min-h-[635px] relative bg-no-repeat bg-cover bg-center flex flex-col justify-center  ">
      <div className="container ">
        <div className=" text-whiteRock-100 w-1/2">
          <h2>Insert title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum explicabo molestiae tempore, tempora
            quas doloremque eos aliquam ullam aliquid amet deleniti et quis obcaecati alias, sit quibusdam praesentium
            in? Consectetur, totam? Nobis assumenda commodi quidem, fuga maiores quod unde illo. Earum officia
            exercitationem corporis fugiat, commodi voluptate aperiam consequuntur fugit repudiandae tenetur suscipit
            itaque repellendus necessitatibus error, deserunt numquam.
          </p>
          <Button>Learn More </Button>
        </div>

        <div className="bg-stone-800 text-whiteRock-100 flex flex-col max-w-[400px] absolute  -top-10 rounded-lg p-8 right-28">
          <h5>Explore Our Site</h5>
          <hr />
          {exploreContent.map((content) => (
            <div key={content.id} className="not-last:border-b  border-b-whiteRock-100">
              <h5 className="flex justify-between items-start">
                {content.name}
                <span>
                  <MoveRight />
                </span>
              </h5>
              <p className="max-w-[350px] pb-2">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
