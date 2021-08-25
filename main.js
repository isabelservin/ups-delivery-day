//prompt user to enter item and qty
let greeting = alert("Welcome to the UPS storefront, I will be your virtual assistant!")
let newItem = prompt("What would you like to order today?")
let qty = prompt("How many would you like to order?")

//randomly assign a price
const generatePrice = (min, max) => {
    let price = (Math.random() * max) + min
    if (price >= max) {
        return price = max.toFixed(2)
    } else {
    return price.toFixed(2)
    }
}

console.log(generatePrice(1, 100))