import { Action, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface InjectableStore extends EnhancedStore {
  injectReducer: { (key: string, reducer: Reducer<any, any>): void };
}

export type AppThunk = ThunkAction<void, any, unknown, Action<string>>;