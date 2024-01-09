export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()

        // Use map() to generate new array of strings
        const divStringArray = orders.map(
            (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
              return `<section>
                        <div>Order #${order.id} cost $${orderPrice}</div>
                    </section>`
            }
        )
    
        // This function needs to return a single string, not an array of strings
        const ordersHTML = divStringArray.join("")
        return ordersHTML
}