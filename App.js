import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VRScene from './src/VR/VRScene.js'
import Intro from './screens/Intro.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VR">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="VR" component={VRScene} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
