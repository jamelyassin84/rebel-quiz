import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
    RootNavigation,
    RootRoutes,
    rootRoutes,
} from './core/routes/root.routing'
import BottomNavigation from './core/navigations/bottom-navigation/BottomNavigation'

const Stack = createNativeStackNavigator<RootNavigation>()

const AppRoot: React.FC = () => {
    const routes: RootRoutes[] = rootRoutes

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={BottomNavigation}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoot
