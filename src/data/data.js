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
import launchPort from '../assets/technology/image-launch-vehicle-portrait.jpg'
import launchLand from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceCapPort from '../assets/technology/image-space-capsule-portrait.jpg'
import spaceCapLand from '../assets/technology/image-space-capsule-landscape.jpg'
import spacePort from '../assets/technology/image-spaceport-portrait.jpg'
import spaceLand from '../assets/technology/image-spaceport-landscape.jpg'


const crewImg= [
    {
    image:{
        png: douglasPng,
        webp: douglasWebp
    }
},
    {
    image:{
        png: markPng,
        webp: markWebp
    }
},
    {
    image:{
        png: victorPng,
        webp: victorWebp
    }
},
    {
    image:{
        png: anoushenPng,
        webp: anoushenWebp
    }
},
]
const destinationImg = [{
    image:{
        png: moonPng,
        webp: moonWebp
    }
},
    {

        image:{
            png: marsPng,
            webp: marsWebp
        },

    },
    {

        image:{
            png: europaPng,
            webp: europaWebp.src
        },
    },
    {

        image:{
            png: titanPng,
            webp: titanWebp
        },
    },
]
const technologyImg = [
    {

    image:{
        portrait: launchPort,
        landscape: launchLand,
    }
},
    {

    image:{
        portrait: spaceCapPort,
        landscape: spaceCapLand,
    }
},
    {

    image:{
        portrait: spacePort,
        landscape: spaceLand,
    }
}
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
export const technology = data.technology.map((tech,i) => ({
    ...tech,
    images: technologyImg[i].image
}))

export default data