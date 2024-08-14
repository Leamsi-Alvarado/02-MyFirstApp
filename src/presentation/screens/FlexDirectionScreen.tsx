import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexDirection = () => {
  return (
<View style={styles.container}>
    <View style={[styles.box,styles.box1]}/>
    <View style={[styles.box,styles.box2]}/>
    <View style={[styles.box,styles.box3]}/>
    <View style={[styles.box,styles.box4]}/>
    <View style={[styles.box,styles.box1]}/>
    <View style={[styles.box,styles.box2]}/>
    <View style={[styles.box,styles.box3]}/>
    <View style={[styles.box,styles.box4]}/>
    <View style={[styles.box,styles.box1]}/>
    <View style={[styles.box,styles.box2]}/>
    <View style={[styles.box,styles.box3]}/>
    <View style={[styles.box,styles.box4]}/>
    <View style={[styles.box,styles.box1]}/>
    <View style={[styles.box,styles.box2]}/>
    <View style={[styles.box,styles.box3]}/>
    <View style={[styles.box,styles.box4]}/>
    <View style={[styles.box,styles.box1]}/>
    <View style={[styles.box,styles.box2]}/>
    <View style={[styles.box,styles.box3]}/>
    <View style={[styles.box,styles.box4]}/>
    <View style={[styles.box,styles.box1]}/>
    <View style={[styles.box,styles.box2]}/>
    <View style={[styles.box,styles.box3]}/>
    <View style={[styles.box,styles.box4]}/>
</View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 20
    },
    box:{
        // flex:1, 
        width: 100,
        height: 100
    },
    box1: {
        backgroundColor: '#5856D6',
        
    },
    box2: {
        backgroundColor: '#1a187d',
        
    },
    box3: {
        backgroundColor: '#0400ff',
    },
    box4: {
        backgroundColor: '#000000',
    },
})