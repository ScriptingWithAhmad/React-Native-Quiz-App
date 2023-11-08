import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../Styles/styles';

export default function Card() {
  return (
    <View style={styles.cardView}>
        {/* <View style= {styles}> */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Let's Test Your Self...</Text>
          </View>
         
      </View>
    // </View>
  );
}
