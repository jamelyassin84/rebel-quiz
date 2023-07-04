import {createAction} from '@reduxjs/toolkit'
import {Profile} from './profile.model'

export const load = createAction(
    '[Profile/API] Load Profile',
    (profile: Profile) => ({
        payload: {
            profile,
        },
    }),
)

export const upsert = createAction(
    '[Profile/API] Update Profile',
    (profile: Profile) => ({
        payload: {
            profile,
        },
    }),
)

export const ProfileActions = {load, upsert}
