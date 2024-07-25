import React from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaView, Text } from 'react-native'
import { TestScreen } from './screens/test/TestScreen';
import { LoginScreen } from './screens/credentials/LoginScreen';
import { DashboardScreen } from './screens/dashboard/DashboardScreen';

export const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      {/* <TestScreen /> */}
      {/* <LoginScreen /> */}
      <DashboardScreen />
    </PaperProvider>
  )
}
