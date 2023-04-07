import { STOCK_DETAILS_FAIL, STOCK_DETAILS_REQUEST, STOCK_DETAILS_SUCCESS } from "../../constant"

  
  export const getStockDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case STOCK_DETAILS_REQUEST:
        return { loading: true }
      case STOCK_DETAILS_SUCCESS:
        return { loading: false, data: action.payload }
      case STOCK_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
 