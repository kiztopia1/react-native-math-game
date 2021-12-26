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
            
            <View style={styles.choosesCont}>
            {this.randomArray.map((number, index) => 
                <Text style={styles.choose} key={index}>{number}</Text>
            )}
            </View>
            
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
        padding:20,
        borderRadius: 4,
        fontSize: '2rem'
    },
    choosesCont: {

        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-around'
    },
    choose: {
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal:50,
        backgroundColor: 'gray',
        width: '100px',
        padding: '10px',
        fontSize: '1.5rem',
        borderRadius: 4
        
    }
  });