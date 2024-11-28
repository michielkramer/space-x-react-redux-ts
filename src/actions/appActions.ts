import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

export const setFavourites = createAction(actionTypes.APP.SET_FAVOURITES);