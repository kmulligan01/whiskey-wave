import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Rating } from '@mui/material'
import { Button } from '../Buttons'
import { PartyPopper, TentTree, CloudSun, UtensilsCrossed, Music4 } from 'lucide-react'
import LensIcon from '@mui/icons-material/Lens'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

type WhiskeyItemDetailProps = {
  wImage: string
  wName: string
  wType: string
  wOccasion: string[]
  wAbu: number
  wPrice: string
  wRating: number
}

export function WhiskeyItemDetail({ wImage, wName, wType, wOccasion, wAbu, wPrice, wRating }: WhiskeyItemDetailProps) {
  const [myRating] = useState(wRating)

  const getIconByOccasion = (occasion: string) => {
    switch (occasion) {
      case 'Celebration':
        return <PartyPopper />
      case 'Relaxation':
        return <CloudSun />
      case 'Outdoors':
        return <TentTree />
      case 'Upscale':
        return <UtensilsCrossed />
      case 'Music':
        return <Music4 />
      default:
        return <TentTree />
    }
  }

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#4c4842',
    },
  })

  return (
    <>
      <picture className="md:w-1/3 w-full">
        <img src={wImage} alt={wName} className="" />
      </picture>
      <div className="w-full">
        <h3>{wName}</h3>
        <div className="border-y-2 border-y-stone-600">
          <div className={`grid md:grid-cols-2 md:border-b-2 border-b-stone-600 grid-cols-1`}>
            <h4>{wType}</h4>
            <div className="flex lg:items-center lg:justify-around md:border-l-2 border-l-stone-600 flex-col lg:flex-row">
              {wOccasion.map((occasion, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Button size="icon" variant="dark">
                    {getIconByOccasion(occasion)}
                  </Button>
                  <p className="text-stone-700 text-base font-bold">{occasion}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-col grid-cols-1">
            <div>
              <h6 className="text-stone-600">History</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam a illo, culpa natus debitis libero
                deserunt praesentium? Magni quas delectus earum praesentium suscipit voluptates cumque nemo, excepturi
                reprehenderit iusto.
              </p>
              <h6 className="text-stone-600">Food Pairing</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam a illo, culpa natus debitis libero
                deserunt praesentium? Magni quas delectus earum praesentium suscipit voluptates cumque nemo, excepturi
                reprehenderit iusto.
              </p>
            </div>

            <div className="flex flex-col items-center justify-start text-center md:border-l-2 border-l-stone-600">
              <div className="border-b-2 border-b-stone-600 w-full pb-5">
                <h6 className="text-stone-600">Rating</h6>
                <StyledRating
                  name="customized-color"
                  defaultValue={myRating}
                  precision={0.1}
                  icon={<LensIcon fontSize="inherit" />}
                  emptyIcon={<RadioButtonUncheckedIcon fontSize="inherit" />}
                  readOnly
                  sx={{ fontSize: '12px' }}
                />
              </div>
              <div className="border-b-2 border-b-stone-600 w-full ">
                <h6 className="text-stone-600">Price</h6>
                <p className="font-bold text-lg">{wPrice}</p>
              </div>
              <div className="pb-5 md:pb-0">
                <h6 className="text-stone-600">Alc/Vol</h6>
                <Button size="icon" variant="dark">
                  {wAbu}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
