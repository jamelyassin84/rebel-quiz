import {EntityState} from '@reduxjs/toolkit'
export function entity_to_array(entities: Object): any[] {
    return Object.values(entities)
}

export function entity_to_object<T>(state: EntityState<T>): T {
    return state.entities[state.ids[0]] as T
}
