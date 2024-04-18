
import { getLocations } from "./database.js"

export const LocationsList = () => {
    const locations = getLocations()

    let htmlString = '<article class="locationsList">'

    for (const location of locations) {
        htmlString += `<section class="location">
            <div class="location__item">${location.location}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}
