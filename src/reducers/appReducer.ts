import { AnyAction } from 'redux';
import actionTypes from '../constants/actionTypes';

type appState = {
    isLoading: boolean;
};

const initialState: appState = {
    isLoading: false
};

function appReducer(state: appState = initialState, action: AnyAction): appState {
    console.log('action', action);
    switch(action.type) {
        case actionTypes.APP.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        default:
            return initialState;
    }
}

export default appReducer;
