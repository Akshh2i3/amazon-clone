import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    cnt: 0
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                // checking if item already present or not
                const isPresent = state.cart.find((item) => item.id === action.payload.id)

                // if present then update quantity else add new
                if (isPresent) {
                    state.cart = state.cart.map((item) => ((item.id === action.payload.id)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item))
                } else {
                    state.cart.push({ ...action.payload, quantity: 1 })
                }
                state.cnt = state.cnt + 1
            },
            removeFromCart: (state, action) => {
                state.cnt = state.cnt - action.payload.quantity
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            },
            incrementQuantity: (state, action) => {
                state.cart = state.cart.map((item) => ((item.id === action.payload.id)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item))
                state.cnt = state.cnt + 1
            },
            decrementQuantity: (state, action) => {
                state.cart = state.cart.map((item) => ((item.id === action.payload.id)
                    ? { ...item, quantity: item.quantity - 1 }
                    : item))
                state.cnt = state.cnt - 1
            },
            clearCart: (state, action) => {
                state.cart = []
                state.cnt = 0
            }
        }
    }
)

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions
export const getCart = (state) => state.cart.cart
export const getCnt = (state) => state.cart.cnt
export default cartSlice.reducer