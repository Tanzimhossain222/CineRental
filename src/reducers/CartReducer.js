export const initialState = {
    cartData: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            }
        }

        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                cartData: state.cartData.filter(item => item.id !== action.payload.id)
            }
        }

        default: {
            return state;
        }
    }
}


