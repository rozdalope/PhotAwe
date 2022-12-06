import { ADD_CART, REMOVE, REMOVE_ITEM } from './type';


// Initial State
const initialState = {
    cart: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CART:
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            const temp = { ...action.payload, qty: 1 }
            return {
                ...state,
                cart: [...state.cart, temp],
            }

        case 'REMOVE':
            const data = state.cart.filter((el) => el.id !== action.payload.item)
            return {
                ...state, cart: data,
            }

        case REMOVE_ITEM:
            const itemIndex_desc = state.cart.findIndex((item) => item.id === action.payload.id)
            if (state.cart[itemIndex_desc].qty === 1) {
                const data = state.cart.filter((item) => item.id !== action.payload.id)
                return {
                    ...state,
                    cart: data,
                }
            }

        default:
            return state;
    }

}

export default reducer;