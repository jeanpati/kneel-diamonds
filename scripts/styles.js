// export const StyleOptions = async () => {
//     const response = await fetch("http://localhost:8088/styles")
//     const styles = await response.json()
//     // Fill in the rest
//     let stylesHTML = ""
//     for (const style of styles) {
//         stylesHTML += `<input type='radio' name='styles' value='${style.id}'>${style.style}`
//     }

//     return stylesHTML
// }




export const StyleOptions = async () => {
    document.addEventListener("change", handleStyleChoice)
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    // Use map() to generate new array of strings
    const divStringArray = styles.map(
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    const optionsHTML = divStringArray.join("")
    return optionsHTML
}



// Change it to the name of the setter function you created.
import {setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "style") {
        setStyleChoice(parseInt(changeEvent.target.value))
    }
}