// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()

//     let metalHTML = ""
//     for (const metal of metals) {
//         metalHTML += `<input type='radio' name='metals' value='${metal.id}'>${metal.metal}`
//     }
//     return metalHTML
// }

export const MetalOptions = async () => {
    document.addEventListener("change", handleMetalChoice)
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let optionsHTML = ""

    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")
    return optionsHTML
}




// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetalChoice } from "./TransientState.js"

const handleMetalChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "metal") {
        setMetalChoice(parseInt(changeEvent.target.value))
    }
}