import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const getApiData = createAction(actionTypes.APP.GET_API_DATA);