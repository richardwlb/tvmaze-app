import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tvshowReducer from '../reducers/tvShowReducer';

export const store = configureStore({
  reducer: {
    tvshow: tvshowReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
