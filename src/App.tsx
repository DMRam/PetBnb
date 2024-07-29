import React, { useState } from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { LoginScreen } from './screens/credentials/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigator/BottomNav';
import { useLogged } from './hooks/logged_state/useLogged';


export const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };


  const { logged, onLoggedInOut } = useLogged()
  const onLoginClicked = () => {
    onLoggedInOut()
  }

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        {!logged && <LoginScreen logged={onLoginClicked} />}
        {logged &&
          // <Navigator />
          // <BottomNav />
          // <DrawerNav />
          <AppNavigator />
        }
      </PaperProvider>
    </NavigationContainer>
  )
}
