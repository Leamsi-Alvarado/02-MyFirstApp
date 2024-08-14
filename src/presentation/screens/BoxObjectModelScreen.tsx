import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}> 
        {/* <Text style={styles`.title}>Box Object Screen</Text> */}
        <View style={styles.purpleBox}>
            <Text style={{color: 'white'}}>Hola mundo</Text>
        </View>
        {/* <View style={styles.purpleBox}></View> */}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        flex: 1
    },
    title:{
        fontSize: 40,
        borderWidth:10,
        paddingVertical: 10
    },
    purpleBox:{
        height: 30,
        backgroundColor: 'red',
        // margin: 20,
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5
    }
})