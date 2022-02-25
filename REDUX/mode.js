export const Seller_Mode = "seller_Mode"
export const Buyer_Mode = "buyer_Mode"
export const change_Mode = "change_Mode"

const initialState = 0

const checkMode = (state = initialState, action) => {
    switch (action.type) {
        case Seller_Mode:
                return state = 0
        case Buyer_Mode:
                return state = 1
        
        case change_Mode:
                return action.payload        
        default:
                return state
    }
}

export default checkMode