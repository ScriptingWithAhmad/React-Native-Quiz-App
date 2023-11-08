import {View} from 'react-native';
import React from 'react';
import Card from '../Components/Scripts/Card';
import Buttons from '../Components/Scripts/Buttons';
import styles from '../Components/Styles/styles';

export default function home() {
  return (
    <View>
      <Card/>
      <View style={styles.home2}  >
        <Buttons styles={styles.btn} text={'Start'} />
      </View>
    </View>
  );
}
