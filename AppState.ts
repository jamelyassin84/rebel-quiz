import {configureStore} from '@reduxjs/toolkit'
import {AppState} from 'react-native'
import {
    profileFeatureKey,
    profileReducer,
} from './core/store/profile/profile.reducer'

export interface State extends AppState {}

export const reducers = {
    [profileFeatureKey]: profileReducer,
}

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
