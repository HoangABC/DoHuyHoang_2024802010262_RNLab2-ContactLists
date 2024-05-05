
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './stack_navigation';


export default function App() {
  return (
  
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    
  );
}

