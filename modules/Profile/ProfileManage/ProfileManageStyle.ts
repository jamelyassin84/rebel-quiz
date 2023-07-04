import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(150,150,150,.5)',
        borderRadius: 10,
        padding: 8,
        paddingVertical: 20,
        width: 400,
    },
    submitButton: {
        width: 400,
        paddingVertical: 20,
        backgroundColor: 'black',
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
})
