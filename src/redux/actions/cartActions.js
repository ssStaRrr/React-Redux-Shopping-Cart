import * as actionTypes from "./actionTypes"

//With Regular Function Expression

export function addToCart(cartItem) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: cartItem
    }
}

//With arrowFunction's return object Syntax 

export const removeFromCart = product => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: product
})