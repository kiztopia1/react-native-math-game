import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class Game extends Component {
    Target = 10 + Math.floor(40 * Math.random())
    render() {
        return (
            <View  style={styles.container} >
             <Text style={styles.target}>{this.Target}</Text>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    target: {
        textAlign: 'center',
        marginTop: 30,
        marginHorizontal: 50,
        backgroundColor: 'gray',
        display: "inline",
        padding:20,
        borderRadius: 4,
        fontSize: '2rem'
    }
  });