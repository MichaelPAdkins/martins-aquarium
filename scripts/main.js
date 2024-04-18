// Import the FishList function from the correct module
import {FishList} from './fishlist.js'
import { TipsList } from './tips.js'
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#container")
const asideElement = document.querySelector("#tips")

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (fish__name of fish) {
        if (fish__name.length % 3 === 0){
            
            console.log(number)
            holyFish.push(fish__name)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []

    for (fish__name of fish){
        if (fish__name.length % 5 === 0){
            console.log(number)

            soldierFish.push(fish__name)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}


parentHTMLElement.innerHTML = FishList()
asideElement.innerHTML += TipsList()