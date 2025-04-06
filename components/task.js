import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const handlePress =() => {
    console.log('CONGRATS!');
};
const Task =(props) => {
   const { text,onPress } = props;
    return (
       
        <View style ={styles.item} >
            <View style={styles.itemLeft}>
              <View style={styles.square} ></View>
              <Text style={styles.itemText}> {props.text}</Text>
            </View>
        </View>

    )
        
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#f8c7c7',
        padding: 13,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft:{
       flexDirection: 'row',
       alignItems: 'center',
       flexWrap: 'wrap'
    },
    square:{
      width: 20,
      height: 20,
      backgroundColor: '#9a7777',
      opacity: 0.4,
      borderRadius: 6,
      marginRight:11,

    },
    itemText:{
        maxWidth:'80%',
    },
});

export default Task;
