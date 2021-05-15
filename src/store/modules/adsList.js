import axios from "axios";
import { handleActions } from "redux-actions";
import { SERVER } from "../../config";

const getAdsDataAPI = (page, limit) =>
  axios.get(`${SERVER}/api/ads?page=${page}&limit=${limit}`);

const GET_ADS_LIST_DATA = "GET_ADS_LIST_DATA";
const GET_ADS_LIST_DATA_SUCEESS = "GET_ADS_LIST_DATA_SUCEESS";
const GET_ADS_LIST_DATA_FAILURE = "GET_ADS_LIST_DATA_FAILURE";

export const getAdsListData = (page, limit) => async (dispatch) => {
  dispatch({ type: GET_ADS_LIST_DATA });
  try {
    const res = await getAdsDataAPI(page, limit);
    dispatch({ type: GET_ADS_LIST_DATA_SUCEESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_ADS_LIST_DATA_FAILURE, payload: e });
  }
};

const initState = {
  adsList: "",
  loading: false,
  error: null,
};

export default handleActions(
  {
    [GET_ADS_LIST_DATA_SUCEESS]: (state, { payload: data }) => ({
      ...state,
      adsList: data,
      loading: false,
    }),
    [GET_ADS_LIST_DATA]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_ADS_LIST_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      loading: false,
      error: error,
    }),
  },
  initState
);
