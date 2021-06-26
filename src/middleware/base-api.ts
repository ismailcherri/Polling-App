import axios from 'axios';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export interface ApiBeganAction {
  url: string;
  method: 'GET' | 'POST';
  data?: unknown;
  onStart: string;
  onSuccess: string;
  onFail: string;
}

export const apiCallBegan = createAction<ApiBeganAction>('baseApi/callBegan');
export const apiCallSuccess = createAction<PayloadAction>(
  'baseApi/callSuccess',
);
export const apiCallFailed = createAction<PayloadAction>('baseApi/callFailed');

const baseApi: ThunkMiddlewareFor<unknown> =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) {
      return next(action);
    }

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) {
      dispatch({ type: onStart });
    }

    next(action);

    try {
      const response = await axios.request({
        baseURL: process.env.REACT_APP_API_URL,
        url,
        method,
        data,
      });
      dispatch(apiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default baseApi;
