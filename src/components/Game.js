import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import RandomNumber  from './RandomNumber'
export default class Game extends Component {
    state = {
        selected : []
    }
    choose = this.props.choose
    randomArray = Array
        .from({length: this.props.choose})
        .map(() => 1 + Math.floor(10 * Math.random()))
    target = this.randomArray
        .slice(0, 4)
        .reduce((acc, curr) => acc+curr, 0);

    isSelected = (index) => {
        return this.state.selected.indexOf(index) >= 0
    }
    selectNumber = (index) => {
        this.setState(prevState => ({
            selected: [...prevState.selected, index]
        }))
    }
    render() {
        return (
            <View  style={styles.container} >
             <Text style={styles.target}>{this.Target} {this.target}</Text>  
            
            <View style={styles.choosesCont}>
            {this.randomArray.map((number, index) => 
                <RandomNumber 
                key={index} 
                    no={number} 
                    index={index} 
                    isSelected={this.isSelected(index)}
                    onPress={this.selectNumber}
                />
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
    
  });