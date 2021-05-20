export const setTotalPrice = (totalPrice) => ({
    type: 'SET_TOTAL_PRICE',
    payload: totalPrice
})

export const setTotalCount = (itemsCount) => ({
    type: 'SET_TOTAL_COUNT',
    payload: itemsCount
})

export const addPizzaToCart = (pizzaItem) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaItem
})