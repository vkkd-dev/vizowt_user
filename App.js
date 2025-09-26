import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './pages/Navigation/navigation';
import { NavigationContainer } from '@react-navigation/native'
import { MyColors } from './assets/MyColors';

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={MyColors.primary}
      />
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;