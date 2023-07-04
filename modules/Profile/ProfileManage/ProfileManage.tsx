import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import {useFormik} from 'formik'
import * as style from './ProfileManageStyle'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {ProfileActions} from '../../../core/store/profile/profile.actions'
import {Button} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'

type Props = {}

const ProfileManage: React.FC<Props> = (props) => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const [imageSource, setImageSource] = React.useState<any>(null)

    const formik = useFormik({
        initialValues: {
            id: 1,
            name: '',
            email: '',
            address: '',
            picture: '',
        },
        onSubmit: async (values) => {
            const picture = await uploadImage()

            const payload = {...values, picture: picture}

            dispatch(ProfileActions.upsert(payload as any))

            console.warn(payload.picture)

            navigation.navigate('ProfileDetails')
        },
        validate: (values) => {
            const errors: any = {}

            if (!values.name) {
                errors.name = 'Name is required'
            }

            if (!values.email) {
                errors.email = 'Email is required'
            }

            if (!values.address) {
                errors.address = 'Address is required'
            }

            return errors
        },
    })

    async function uploadImage(): Promise<string | null> {
        try {
            const uploadURL =
                'https://api.jadwelny.com/jadwelny-api/v1/upload?img_dir=review'
            const formData = new FormData()

            const filename = imageSource.split('/').pop()!
            const match = /\.(\w+)$/.exec(filename)
            const type = match ? `image/${match[1]}` : 'image'

            formData.append('images', {
                uri: imageSource,
                name: filename,
                type,
            } as any)

            const response = await axios.post(uploadURL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            return response.data.upload[0]
        } catch (error: any) {
            console.warn('Error uploading images:', error.response.error)
            return null
        }
    }

    const openCamera = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
        if (permissionResult.granted === false) {
            alert('Camera permission required')
            return
        }

        let result = await ImagePicker.launchCameraAsync()

        if (!result.canceled) {
            setImageSource(result?.assets?.[0]?.uri)
        }
    }

    const openImageLibrary = async () => {
        let permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (permissionResult.granted === false) {
            alert('Media library permission required')
            return
        }

        let result = await ImagePicker.launchImageLibraryAsync()

        if (!result.canceled) {
            setImageSource(result?.assets?.[0]?.uri)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button title="Open Image Library" onPress={openImageLibrary} />
                {imageSource && (
                    <Image source={{uri: imageSource}} style={styles.image} />
                )}
            </View>

            <View style={styles.inputContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                />
            </View>

            {formik.touched.name && formik.errors.name ? (
                <Text style={styles.errorText}>{formik.errors.name}</Text>
            ) : null}

            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                />
            </View>

            {formik.touched.email && formik.errors.email ? (
                <Text style={styles.errorText}>{formik.errors.email}</Text>
            ) : null}

            <View style={styles.inputContainer}>
                <Text>Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={formik.handleChange('address')}
                    onBlur={formik.handleBlur('address')}
                    value={formik.values.address}
                />
            </View>

            {formik.touched.address && formik.errors.address ? (
                <Text style={styles.errorText}>{formik.errors.address}</Text>
            ) : null}

            <TouchableOpacity
                style={styles.submitButton}
                onPress={formik.handleSubmit}
            >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = style.style

export default ProfileManage
