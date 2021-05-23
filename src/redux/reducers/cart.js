import {act} from "@testing-library/react";

const initialState = {
    items: [],
    totalPrice: 0,
    itemsCount: 0,
    countOfPizza: {}
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM': {
            const items = [
                ...state.items[action.payload].totalOneTypePizza,
                state.items[action.payload].totalOneTypePizza[0]
            ]
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        totalOneTypePizza: items,
                        totalPrice: getTotalPrice(items)
                    }
                },
                itemsCount: state.itemsCount + 1,
                totalPrice: state.totalPrice + state.items[action.payload].totalOneTypePizza[0].price
            }
        }


        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].totalOneTypePizza // Получаем все пиццы по айди
            const items = oldItems.length > 1 ? state.items[action.payload].totalOneTypePizza.slice(1) : oldItems // если меньше одной то не отнимаем
            const itemsCount = oldItems.length > 1 ? state.itemsCount - 1 : state.itemsCount //  изменяем счетчик пиц
            const totalPrice = oldItems.length > 1 ? state.totalPrice - state.items[action.payload].totalOneTypePizza[0].price : state.totalPrice //  изменяем сумму платежа


            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        totalOneTypePizza: items,
                        totalPrice: getTotalPrice(items)
                    }
                },
                itemsCount,
                totalPrice
            }
        }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                itemsCount: 0
            }
        case 'REMOVE_CART_ITEM':
            const newItems = {...state.items}
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentItemsCount = newItems[action.payload].totalOneTypePizza.length

            delete newItems[action.payload]

            const itemsCount = state.itemsCount - currentItemsCount
            const totalPrice = state.totalPrice - currentTotalPrice
            return {
                ...state,
                items: newItems,
                itemsCount,
                totalPrice
            }
        case 'ADD_PIZZA_TO_CART': {
            const id = action.payload.id + '_' + action.payload.type + '_' + action.payload.size
            const action_id = action.payload.id
            let count = 0

            const currentPizzaItems = !state.items[id] // есть ли оббект с таким айди
                ? [action.payload] // если нет то добавляем обьект пиццы
                : [...state.items[id].totalOneTypePizza, action.payload] // если есть то к этому обьекту добавляем еще один наш
            const newItems = {
                ...state.items, // прошлые елементы
                [id]: { // по нужному айди
                    totalOneTypePizza: currentPizzaItems, // массив обьектов пиц
                    totalPrice: getTotalPrice(currentPizzaItems) // считаем сколько стоят пиццы в массиве
                },
            };


            const currestPizzaCounter = !state.countOfPizza[action_id] ? 1 : state.countOfPizza[action_id] + 1
            const newCount = {
                ...state.countOfPizza,
                [action_id]: currestPizzaCounter
            }

            // получем все массивы по ключу и плюсуем к длине массива пиц в обьекте
            const itemsCount = Object.keys(newItems).reduce((sum, key) => newItems[key].totalOneTypePizza.length + sum, 0)
            return {
                ...state, // прошлый стейт
                items: newItems, // пиццы
                itemsCount, // кол-во пиц для корзины
                totalPrice: state.totalPrice + action.payload.price, // сумма заказа для корзины
                countOfPizza: newCount
            }
        }
        default:
            return state
    }

}



