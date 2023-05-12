import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type store from './store';

export type ReduxState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
