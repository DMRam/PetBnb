import React, { useState } from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { LoginScreen } from './screens/credentials/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigatorOwner } from './navigator/AppNavigatorOwner';
import { useLogged } from './hooks/logged_state/useLogged';
import { useLoggedUserRole } from './hooks/logged_state/useLoggedUserRole';
import { AppNavigatorHost } from './navigator/AppNavigatorHost';


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
  const { roleLogged, onLoggedUserRole } = useLoggedUserRole()

  const onLoginClicked = () => {
    onLoggedInOut()

    // Additionally needs to give a role logged by default is Owner
    onLoggedUserRole("Owner")
  }



  console.log("APP.tsx ROLE: " + roleLogged)
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>

        {!logged ? (
          <LoginScreen logged={onLoginClicked} />
        ) : (
          roleLogged === 'Owner' ? <AppNavigatorOwner /> : <AppNavigatorHost />
        )}
      </PaperProvider>
    </NavigationContainer>
  )
}
