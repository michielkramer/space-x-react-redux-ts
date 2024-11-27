import { TypedUseSelectorHook , useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import type { AppDispatch, RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>();
