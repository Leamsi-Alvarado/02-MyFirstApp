import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkScreen = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.blueBox]} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        //Todo: tarea
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        
    },
    purpleBox: {
        backgroundColor: '#5856d6',

    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        top: 50

    },
    blueBox: {
        backgroundColor: '#28C4D9',

    },

})