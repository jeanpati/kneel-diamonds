// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()
//     // Fill in the rest
//     let sizesHTML = ""
//     for (const size of sizes) {
//         sizesHTML += `<input type='radio' name='sizes' value='${size.id}'>${size.carets} carat`
//     }

//     return sizesHTML
// }



export const SizeOptions = async () => {
    document.addEventListener("change", handleSizeChoice)
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    // Use map() to generate new array of strings
    const divStringArray = sizes.map(
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets} carat
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    const optionsHTML = divStringArray.join("")
    return optionsHTML
}

// Change it to the name of the setter function you created.
import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "size") {
        setSizeChoice(parseInt(changeEvent.target.value))
    }
}