import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const setIsLoading = createAction(actionTypes.APP.SET_IS_LOADING);
export const setFavourites = createAction(actionTypes.APP.SET_FAVOURITES);