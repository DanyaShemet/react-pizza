const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                itemsCount: action.payload
            }
        case 'ADD_PIZZA_TO_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload]
            };

            return {
                ...state,
                items: newItems,
                itemsCount: Object.values(newItems).flat(2).length,
                totalPrice: state.totalPrice + action.payload.price
            }
        }
        default:
            return state
    }

}



