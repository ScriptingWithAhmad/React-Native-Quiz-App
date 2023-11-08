import React from 'react';
import {TextInput, View} from 'react-native';
import styles from '../Styles/styles';


const Inputs = (props:any) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={props.Title} />
    </View>
  );
};
export default Inputs;
