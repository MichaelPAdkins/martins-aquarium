import { getTips } from "./database.js"

export const TipsList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipsList">'

    // Create HTML representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="martins tips">
            
            <div class="tip__item">${tip.tip}</div>

        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}