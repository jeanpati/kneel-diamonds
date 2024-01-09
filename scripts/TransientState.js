// Set up the transient state data structure and provide initial valuess
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}
//need to be metalId to be recognized and expanded in postman


// Functions to modify each property of transient state
export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}
export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}
export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}



// Function to convert transient state to permanent state
export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST", //POST means to create
        headers: { // make the key a string bc the key name has a dash in it so surround with quotes
            "Content-Type": "application/json"
        },
        //can only send strings, convert to string
         body: JSON.stringify(transientState)
        }
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrder")
    document.dispatchEvent(customEvent)
}