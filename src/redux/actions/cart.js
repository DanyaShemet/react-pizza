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

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})

export const plusItem = (id) => ({
    type: 'ADD_CART_ITEM',
    payload: id
})

export const minusItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})