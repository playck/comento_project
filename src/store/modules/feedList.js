import axios from "axios";
import { handleActions } from "redux-actions";
import { SERVER } from "../../config";

const getFeedListDataAPI = (page, ord, category, limit) =>
  axios.get(
    `${SERVER}/api/list?page=${page}&limit=${limit}&ord=${ord}${category}`
  );

const getAdsDataAPI = (page, limit) =>
  axios.get(`${SERVER}/api/ads?page=${page}&limit=${limit}`);

const GET_FEED_LIST_DATA = "GET_PRODUCT_LIST_DATA";
const GET_FEED_LIST_DATA_SUCEESS = "GET_PRODUCT_LIST_DATA_SUCEESS";
const GET_FEED_LIST_DATA_FAILURE = "GET_PRODUCT_LIST_DATA_FAILURE";

const GET_ADS_LIST_DATA = "GET_ADS_LIST_DATA";
const GET_ADS_LIST_DATA_SUCEESS = "GET_ADS_LIST_DATA_SUCEESS";
const GET_ADS_LIST_DATA_FAILURE = "GET_ADS_LIST_DATA_FAILURE";

export const getFeedListData =
  (page, ord, category, limit) => async (dispatch) => {
    dispatch({ type: GET_FEED_LIST_DATA });
    try {
      const res = await getFeedListDataAPI(page, ord, category, limit);
      dispatch({ type: GET_FEED_LIST_DATA_SUCEESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_FEED_LIST_DATA_FAILURE, payload: e });
    }
  };

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
  feedList: "",
  adsList: "",
  loading: false,
  error: null,
};

export default handleActions(
  {
    [GET_FEED_LIST_DATA_SUCEESS]: (state, { payload: data }) => ({
      ...state,
      feedList: data,
      loading: false,
    }),
    [GET_FEED_LIST_DATA]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_FEED_LIST_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      loading: false,
      error: error,
    }),
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
