import React, { useState } from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaView, Text } from 'react-native'
import { TestScreen } from './screens/test/TestScreen';
import { LoginScreen } from './screens/credentials/LoginScreen';
import { DashboardScreen } from './screens/dashboard/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigator } from './navigator/Navigator';
import { BottomNav } from './navigator/BottomNav';


export const App = () => {

  const [logged, setLogged] = useState<boolean>(false)

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  const onLoginClicked = () => {
    setLogged(!logged)
  }

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        {!logged && <LoginScreen logged={onLoginClicked} />}
        {logged &&
          // <Navigator />
          <BottomNav />
        }
        {/* <TestScreen /> */}

        {/* <DashboardScreen /> */}

        
      </PaperProvider>
    </NavigationContainer>
  )
}
