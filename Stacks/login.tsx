import React from 'react'
import {  View , Image} from 'react-native'
//  import styles from './styles'
import Inputs from '../Components/Scripts/Input';
import styles from '../Components/Styles/styles'
import Buttons from '../Components/Scripts/Buttons';

const login=()=> {
  return (
    <View  style={styles.view1}>
      <Image
        style={styles.logo}
        source={require('../Components/Sources/quiz.jpeg')}
      />
      <View>
        <Inputs Title={"Username"}/>
        <Inputs Title={"Password"}/>
        <Buttons Title={"Login"}/>
      </View>
    </View>
  )
}

export default login;
