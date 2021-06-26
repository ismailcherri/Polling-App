import axios from 'axios';
import baseApi, { apiCallBegan } from './base-api';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';

describe('baseApi', () => {
  let axiosSpy: jest.SpyInstance;
  let store: EnhancedStore;

  beforeEach(() => {
    axiosSpy = jest.spyOn(axios, 'request');
    store = configureStore({
      reducer: {
        dummyReducer: createReducer({}, () => null),
      },
      middleware: [baseApi],
    });
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
