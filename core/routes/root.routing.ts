import {NativeStackScreenProps} from '@react-navigation/native-stack'
import ProfileDetails from '../../modules/Profile/ProfileDetails/ProfileDetails'
import ProfileManage from '../../modules/Profile/ProfileManage/ProfileManage'
import {NavigatorScreenParams} from '@react-navigation/native'
import {RootTabs} from './bottom-tab.routing'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootNavigation {}
    }
}

export type RootNavigationProps<Screen extends keyof RootNavigation> =
    NativeStackScreenProps<RootNavigation, Screen>

export interface RootRoutes {
    name: keyof RootNavigation
    component: any
}

export type RootNavigation = {
    ProfileDetails: undefined
    ProfileManage: undefined
    Root: NavigatorScreenParams<RootTabs> | undefined
}

export const rootRoutes: RootRoutes[] = [
    {name: 'ProfileDetails', component: ProfileDetails},
    {name: 'ProfileManage', component: ProfileManage},
]
