import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlise';
import { contactsApi } from './contactsApi';

export const reducer = combineReducers({
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
