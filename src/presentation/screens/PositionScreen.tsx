import React from 'react'
import { View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.greenBox}></View> 
            <View style={styles.purpleBox}></View>
            <View style={styles.orangeBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28c4d9',
    },
    purpleBox:{
        width:100,
        height:100,
        backgroundColor: 'black',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left:0
    },
    orangeBox:{
        width:100,
        height:100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },
    greenBox:{
        // width:100,
        // height:100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject
    }
})