import {CompositeScreenProps} from '@react-navigation/native'
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import {StackScreenProps} from '@react-navigation/stack'
import {
    AntDesign,
    Feather,
    SimpleLineIcons,
    MaterialIcons,
} from '@expo/vector-icons'
import {RootNavigation} from './root.routing'

import {Foundation} from '@expo/vector-icons'
import ProfileManage from '../../modules/Profile/ProfileManage/ProfileManage'
import ProfileDetails from '../../modules/Profile/ProfileDetails/ProfileDetails'

export type RootTabScreenProps<Screen extends keyof RootTabs> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabs, Screen>,
        StackScreenProps<RootNavigation>
    >

export interface BottomTabRoutes {
    name: keyof RootTabs
    component: any
    icon: Function
}

export type RootTabs = {
    ProfileManage: undefined
    ProfileDetails: undefined
}

export const bottomTabRoutes: BottomTabRoutes[] = [
    {
        name: 'ProfileManage',
        component: ProfileManage,
        icon: ({color, size}: any) => (
            <AntDesign
                style={{marginTop: 10}}
                name="home"
                color={color}
                size={size}
            />
        ),
    },
    {
        name: 'ProfileDetails',
        component: ProfileDetails,
        icon: ({color, size}: any) => (
            <Feather
                style={{marginTop: 10}}
                name="calendar"
                color={color}
                size={size}
            />
        ),
    },
]
