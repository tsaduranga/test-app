
import { axiosClientPolygon} from '../../axios-client';
import { STOCK_DETAILS_FAIL, STOCK_DETAILS_REQUEST, STOCK_DETAILS_SUCCESS } from '../../constant';

export const getStockDetails = (apiKey) => async (dispatch) => {
  try {
    dispatch({
      type: STOCK_DETAILS_REQUEST,
    })

    const { data } = await axiosClientPolygon.get(
      `v1/open-close/AAPL/2023-01-09?adjusted=true&amp;apiKey=${apiKey}`
    )

    dispatch({
      type: STOCK_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: STOCK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getStockDetailsByDate = (apiKey, date) => async (dispatch) => {
  try {
    dispatch({
      type: STOCK_DETAILS_REQUEST,
    })

    const { data } = await axiosClientPolygon.get(
      `v1/open-close/AAPL/${date}?adjusted=true&amp;apiKey=${apiKey}`
    )

    dispatch({
      type: STOCK_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: STOCK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

 