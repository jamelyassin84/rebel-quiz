import {
    createEntityAdapter,
    createReducer,
    EntityAdapter,
    EntityState,
} from '@reduxjs/toolkit'
import {Profile} from './profile.model'
import {ProfileActions} from './profile.actions'

export const profileFeatureKey = 'profile'

export interface ProfileState extends EntityState<Profile> {}

export const profileAdapter: EntityAdapter<Profile> =
    createEntityAdapter<Profile>()

export const initialState: ProfileState = profileAdapter.getInitialState({})

export const profileReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ProfileActions.load, (state, action) =>
            profileAdapter.setOne(state, action.payload.profile),
        )

        .addCase(ProfileActions.upsert, (state, action) =>
            profileAdapter.upsertOne(state, action.payload.profile),
        )
})

export const {selectIds, selectEntities, selectAll, selectTotal} =
    profileAdapter.getSelectors()
