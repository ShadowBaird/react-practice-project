import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCartState = { items: [] }

const initialAuthState = {
    isAuthenticated: false,
    userEmail: ''
}

const initialModalCart = {
    show: false
}

const cartSlicer = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (existingCartItemIndex > -1) {
                const existingItem = state.items[existingCartItemIndex]
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                };
                state.items[existingCartItemIndex] = updatedItem;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        remove(state, action) {
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.payload);
            const existingCartItem = state.items[existingCartItemIndex]
            if (existingCartItem.quantity === 1) {
                state.items.splice(existingCartItemIndex, 1)
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity - 1,
                }
                state.items[existingCartItemIndex] = updatedItem
            }
        },
        empty(state) {
            state.items= []
        },
    }
})


const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            state.userEmail = action.payload
        },
        logout(state) {
            state.isAuthenticated = false
            state.userEmail = ''
        }
    }
})

const modalCartSlice = createSlice({
    name: 'modalCart',
    initialState: initialModalCart,
    reducers: {
        open(state) {
            state.show = true
        },
        close(state) {
            state.show = false
        }
    }
})


const store = configureStore({
    reducer: { cart: cartSlicer.reducer, auth: authSlice.reducer, modalCart: modalCartSlice.reducer }
})

export const cartActions = cartSlicer.actions
export const authActions = authSlice.actions;
export const modalCartActions = modalCartSlice.actions;


export default store;