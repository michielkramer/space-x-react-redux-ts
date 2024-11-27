import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const getApiData = createAction(actionTypes.APP.GET_API_DATA);
export const updateApiData = createAction(actionTypes.APP.UPDATE_API_DATA);