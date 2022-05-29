import axios from 'axios';
import baseApi, { apiCallBegan } from './base-api';
import store from 'src/features/question/mock-store';

describe('baseApi', () => {
  let axiosSpy: jest.SpyInstance;

  beforeEach(() => {
    axiosSpy = jest.spyOn(axios, 'request');
    store.clearActions();
  });

  it('should not call axios for non-api actions', () => {
    store.dispatch({ type: 'SOME_TYPE' });

    expect(axiosSpy).not.toHaveBeenCalled();
  });

  it('should call axios for api actions', () => {
    store.dispatch(
      apiCallBegan({
        url: '/',
        method: 'GET',
        onFail: 'fail',
        onStart: 'start',
        onSuccess: 'success',
      }),
    );

    expect(axiosSpy).toHaveBeenCalled();
  });
});
