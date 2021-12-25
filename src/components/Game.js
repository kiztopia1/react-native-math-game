import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default class Game extends Component {
    choose = this.props.choose
    randomArray = Array
        .from({length: this.props.choose})
        .map(() => 1 + Math.floor(10 * Math.random()))
    target = this.randomArray
        .slice(0, 4)
        .reduce((acc, curr) => acc+curr, 0);
    render() {
        return (
            <View  style={styles.container} >
             <Text style={styles.target}>{this.Target} {this.target}</Text>  
            
            {this.randomArray.map((number, index) => (
                <text key={index}>{number}</text>
            ))}
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