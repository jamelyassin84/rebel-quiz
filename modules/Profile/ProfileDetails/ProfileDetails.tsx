import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import * as styles from './ProfileDetailsStyle'
import {Image, Text, View} from 'react-native'
import {ProfileState} from '../../../core/store/profile/profile.reducer'
import {store} from '../../../AppState'
import {useDispatch} from 'react-redux'
import {ProfileActions} from '../../../core/store/profile/profile.actions'
import {entity_to_object} from '../../../core/pipe/entity-to-array.pipe'
import {Profile} from '../../../core/store/profile/profile.model'
import {SafeAreaView} from 'react-native-safe-area-context'

type Props = {}

const ProfileDetails: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const [profile] = React.useState<Profile>(
        entity_to_object(store.getState().profile),
    )

    return (
        <SafeAreaView>
            <View style={{marginHorizontal: 20}}>
                <Image
                    source={{uri: profile.picture}}
                    style={{width: 200, height: 200}}
                />
                <View style={{height: 20}} />

                <Text> Name: </Text>
                <Text> {profile.name} </Text>
                <View style={{height: 20}} />

                <Text> Name: </Text>
                <Text> {profile.name} </Text>
                <View style={{height: 20}} />

                <Text> Email: </Text>
                <Text> {profile.email} </Text>
                <View style={{height: 20}} />

                <Text> Address: </Text>
                <Text> {profile.address} </Text>
                <View style={{height: 20}} />

                <Text> s3: </Text>
                <Text> {profile.picture} </Text>
            </View>
        </SafeAreaView>
    )
}

const {} = styles.style

export default ProfileDetails
