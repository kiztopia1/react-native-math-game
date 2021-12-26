import React, {useState} from 'react'
import {Text, TouchableOpacity ,StyleSheet} from 'react-native'
function RandomNumber({no, index,isSelected, onPress}) {

    const pressHandler = () => {
        if(isSelected){
            return;
        }
        onPress(index)
        
    }
    return (
        <TouchableOpacity onPress={pressHandler}>
            <Text  style={[styles.choose, isSelected && styles.selected]} >{no}</Text>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    choose: {
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal:50,
        backgroundColor: 'gray',
        width: '100px',
        padding: '10px',
        fontSize: '1.5rem',
        borderRadius: 4
        
    },
    selected: {
        opacity: '.3'
    }
})


export default RandomNumber
