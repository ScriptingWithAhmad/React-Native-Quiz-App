import React from 'react';
import login from './Stacks/login';
import home from './Stacks/home';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Questions from './Components/Scrsipts/Questions';
import DataSet from './Components/Scripts/DataSet';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        {/* {login} */}
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={home} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name="Login" component={login} options={{headerShown:false}} /> */}
        <Stack.Screen name="DataSet" component={DataSet} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
