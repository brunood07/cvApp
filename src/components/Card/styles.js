import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    cardContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        width: '100%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF'
    },
    cardContent: {
        marginTop: 10,
        color: '#939393',
    },
});

export default style;