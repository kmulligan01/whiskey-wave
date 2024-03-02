import glenfiddich from '../assets/whiskies/glenfiddich01.png'
import jackDaniels from '../assets/whiskies/jackDaniels.png'
import jameson from '../assets/whiskies/jameson01.png'
import jwBlueLabel from '../assets/whiskies/jwBlueLabel01.png'
import makersMark from '../assets/whiskies/makers.png'
import redbreast from '../assets/whiskies/redbreast.png'
import stranahanBluePeak from '../assets/whiskies/stranahans01.png'
import tully from '../assets/whiskies/tully.png'
import wildTurkey from '../assets/whiskies/wildTurkey01.png'
import woodfordReserve from '../assets/whiskies/woodfordReserve.png'

export const topWhiskies = [
  {
    id: 1,
    name: 'Jack Daniels',
    reviews: 1200,
    averageRating: 4.5,
    price: '$23.99',
    topOccasions: ['Relaxation', 'Celebration'],
    imageUrl: jackDaniels,
    abv: 40, // Example ABV value in percentage
    whiskeyType: 'Tennessee Whiskey', // Example Whiskey Type
  },
  {
    id: 2,
    name: "Maker's Mark",
    reviews: 1500,
    averageRating: 4.8,
    price: '$32.99',
    topOccasions: ['Relaxation', 'Outdoors'],
    imageUrl: makersMark,
    abv: 45, // Example ABV value in percentage
    whiskeyType: 'Bourbon', // Example Whiskey Type
  },
  {
    id: 3,
    name: "Stranahan's Blue Peak",
    reviews: 900,
    averageRating: 4.3,
    price: '$48.99',
    topOccasions: ['Celebration', 'Outdoors'],
    imageUrl: stranahanBluePeak,
    abv: 47, // Example ABV value in percentage
    whiskeyType: 'Single Malt', // Example Whiskey Type
  },
  {
    id: 4,
    name: 'Jameson',
    reviews: 1100,
    averageRating: 4.0,
    price: '$21.49',
    topOccasions: ['Celebration', 'Music'],
    imageUrl: jameson,
    abv: 40, // Example ABV value in percentage
    whiskeyType: 'Irish Whiskey', // Example Whiskey Type
  },
  {
    id: 5,
    name: 'Tullamore Dew',
    reviews: 1300,
    averageRating: 4.6,
    price: '$15.99',
    topOccasions: ['Music', 'Celebration', 'Relaxation'],
    imageUrl: tully,
    abv: 42, // Example ABV value in percentage
    whiskeyType: 'Irish Whiskey', // Example Whiskey Type
  },
  {
    id: 6,
    name: 'Wild Turkey',
    reviews: 800,
    averageRating: 4.7,
    price: '$29.99',
    topOccasions: ['Celebration', 'Outdoors'],
    imageUrl: wildTurkey,
    abv: 50, // Example ABV value in percentage
    whiskeyType: 'Bourbon', // Example Whiskey Type
  },
  {
    id: 7,
    name: 'Redbreast ',
    reviews: 1000,
    averageRating: 4.2,
    price: '$69.99',
    topOccasions: ['Upscale', 'Celebration'],
    imageUrl: redbreast,
    abv: 46, // Example ABV value in percentage
    whiskeyType: 'Irish Whiskey', // Example Whiskey Type
  },
  {
    id: 8,
    name: 'Johnnie Walker Blue ',
    reviews: 2000,
    averageRating: 4.9,
    price: '$68.99',
    topOccasions: ['Celebration', 'Upscale'],
    imageUrl: jwBlueLabel,
    abv: 40, // Example ABV value in percentage
    whiskeyType: 'Blended Scotch', // Example Whiskey Type
  },
  {
    id: 9,
    name: 'Glenfiddich 18',
    reviews: 700,
    averageRating: 4.1,
    price: '$134.99',
    topOccasions: ['Celebration', 'Relaxation', 'Upscale'],
    imageUrl: glenfiddich,
    abv: 43, // Example ABV value in percentage
    whiskeyType: 'Single Malt', // Example Whiskey Type
  },
  {
    id: 10,
    name: 'Woodford Reserve',
    reviews: 1800,
    averageRating: 4.8,
    price: '$53.99',
    topOccasions: ['Celebration', 'Upscale'],
    imageUrl: woodfordReserve,
    abv: 45, // Example ABV value in percentage
    whiskeyType: 'Bourbon', // Example Whiskey Type
  },
]
