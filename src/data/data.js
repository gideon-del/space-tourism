import data from '../data.json' assert {type : 'JSON'}
import moonPng from"../assets/destination/image-moon.png"
import moonWebp from"../assets/destination/image-moon.webp"
import marsPng from"../assets/destination/image-mars.png"
import marsWebp from"../assets/destination/image-mars.webp"
import europaPng from"../assets/destination/image-europa.png"
import europaWebp from"../assets/destination/image-europa.webp"
import titanPng from"../assets/destination/image-titan.png"
import titanWebp from"../assets/destination/image-titan.webp"
import douglasPng from '../assets/crew/image-douglas-hurley.png'
import douglasWebp from '../assets/crew/image-douglas-hurley.webp'
import markPng from '../assets/crew/image-mark-shuttleworth.png'
import markWebp from '../assets/crew/image-mark-shuttleworth.webp'
import anoushenPng from '../assets/crew/image-anousheh-ansari.png'
import anoushenWebp from '../assets/crew/image-anousheh-ansari.webp'
import victorPng from '../assets/crew/image-victor-glover.png'
import victorWebp from '../assets/crew/image-victor-glover.webp'


const crewImg= [
    {
    image:{
        png: douglasPng.src,
        webp: douglasWebp.src
    }
},
    {
    image:{
        png: markPng.src,
        webp: markWebp.src
    }
},
    {
    image:{
        png: victorPng.src,
        webp: victorWebp.src
    }
},
    {
    image:{
        png: anoushenPng.src,
        webp: anoushenWebp.src
    }
},
]
const destinationImg = [{
    image:{
        png: moonPng.src,
        webp: moonWebp.src
    }
},
    {

        image:{
            png: marsPng.src,
            webp: marsWebp.src
        },

    },
    {

        image:{
            png: europaPng.src,
            webp: europaWebp.src
        },
    },
    {

        image:{
            png: titanPng.src,
            webp: titanWebp.src
        },
    },
]
export const crew = data.crew.map((crew,i) => {
    return {
        ...crew,
        images: crewImg[i].image
    }
})
export const destination = data.destinations.map((dest,i) => {
    return {
        ...dest,
        images: destinationImg[i].image
    }
})

export default data