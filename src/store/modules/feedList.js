import axios from "axios";
import { handleActions } from "redux-actions";
import { SERVER } from "../../config";

const getFeedListDataAPI = () => axios.get(`${SERVER}/api/list`);

const GET_FEED_LIST_DATA = "GET_PRODUCT_LIST_DATA";
const GET_FEED_LIST_DATA_SUCEESS = "GET_PRODUCT_LIST_DATA_SUCEESS";
const GET_FEED_LIST_DATA_FAILURE = "GET_PRODUCT_LIST_DATA_FAILURE";

export const getFeedListData = () => async (dispatch) => {
  dispatch({ type: GET_FEED_LIST_DATA });
  try {
    const res = await getFeedListDataAPI();
    dispatch({ type: GET_FEED_LIST_DATA_SUCEESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_FEED_LIST_DATA_FAILURE, payload: e });
  }
};

const initState = {
  feedList: "",
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
  },
  initState
);
