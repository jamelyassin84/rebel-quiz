import {Provider} from 'react-redux'
import {StatusBar} from 'expo-status-bar'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {LogBox, View} from 'react-native'
import AppRoot from './AppComponent'
import {store} from './AppState'

LogBox.ignoreLogs(['EventEmitter.removeListener'])
export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppRoot />
                <StatusBar
                    animated
                    networkActivityIndicatorVisible
                    translucent
                />
            </SafeAreaProvider>
        </Provider>
    )
}
