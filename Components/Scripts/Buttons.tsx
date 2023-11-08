import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from '../Styles/styles';



export default function Buttons( props:any) {
  return (
    // <View >
       <TouchableOpacity style={props.styles} onPress={props.onPress}>
        <Text style={styles.btnText}> {props.text}</Text>
      </TouchableOpacity>
     
    // </View>
  );
}
