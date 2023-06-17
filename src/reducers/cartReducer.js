const initialState = {
    cart: 0,
    loading: false
}

const cartReducer = (state = initialState, action)=>{
    switch (action.type){
        case "ADDPRODUCT": 
            return {
                ...state,
                cart: state.cart+1 
            }
        case "DELETEPRODUCT": 
            return {
                ...state,
                cart: state.cart-1 
            }
        default: 
        return state
    } 
}

export default cartReducer

