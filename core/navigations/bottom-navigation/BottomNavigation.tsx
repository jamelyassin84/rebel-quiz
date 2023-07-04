import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
    bottomTabRoutes,
    BottomTabRoutes,
    RootTabs,
} from '../../routes/bottom-tab.routing'

const BottomTab = createBottomTabNavigator<RootTabs>()

const BottomNavigation: React.FC = () => {
    const routes: BottomTabRoutes[] = bottomTabRoutes

    return (
        <BottomTab.Navigator initialRouteName="ProfileManage">
            {routes.map((route: BottomTabRoutes, index: number) => (
                <BottomTab.Screen
                    key={index}
                    name={route.name}
                    component={route.component}
                    options={{
                        title: route.name,
                        headerShown: false,
                        unmountOnBlur: true,
                        tabBarActiveTintColor: 'black',
                        tabBarIcon: ({color, size}) =>
                            route.icon({color, size}),
                    }}
                />
            ))}
        </BottomTab.Navigator>
    )
}

export default BottomNavigation
