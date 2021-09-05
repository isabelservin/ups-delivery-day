//prompt user to enter item and qty
let greeting = alert("Welcome to the UPS storefront, I will be your virtual assistant!")
let item = prompt("What would you like to order today?")
let qty = prompt("How many would you like to order?")

//randomly assign a price
const generateRandomPrice = (min, max) => {
    let price = (Math.random() * max) + min
    if (price >= max) {
        return price = max.toFixed(2)
    } else {
    return price.toFixed(2)
    }
}

//calculate the total cost of order
const calcTotalPrice =(num1, num2) => {
    let total = num1 * num2
    return total.toFixed(2)
}

//generate rand int between 3-12 days for delivery date
const genDeliveryDay = (min, max) => {
    let lengthOfDelivery = Math.round(Math.random() * (max - min + 1) + min)
    return lengthOfDelivery
}

let lengthOfDelivery = genDeliveryDay(3,12)

let price = generateRandomPrice(1,100)
let totalCost = calcTotalPrice(price, qty)

console.log(`Wonderful! You would like to order ${qty} ${item}, costing $${price} each. Your total cost is $${totalCost} and will be deliverd in ${lengthOfDelivery} days.`)

