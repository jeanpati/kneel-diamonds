import { Orders } from "./Orders.js"
import { PlaceOrder } from "./PlaceOrder.js"
import { MetalOptions } from "./metals.js"
import { SizeOptions } from "./sizes.js"
import { StyleOptions } from "./styles.js"


const render = async() => {
    const metalOptionsHTML = await MetalOptions()
    const StyleOptionsHTML = await StyleOptions()
    const SizeOptionsHTML = await SizeOptions()
    const buttonHTML = await PlaceOrder()
    const OrderList = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${SizeOptionsHTML}

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${StyleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${OrderList}

        </article>
    `
    const container = document.querySelector("#container")
    container.innerHTML = composedHTML
}

render()

document.addEventListener("newOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})