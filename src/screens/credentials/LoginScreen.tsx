import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { View, StyleSheet, KeyboardAvoidingView, Image, Text } from 'react-native';
import { TextInput, Button, Card, Title, useTheme } from 'react-native-paper';

interface Props {
  logged: () => void;
}

export const LoginScreen = ({ logged }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Handle login logic
    console.log('Logging in with', email, password);
    // navigation.navigate('Dashboard');
    logged();
  };

  const handleSignUp = () => {
    // Handle sign up navigation logic
    console.log('Navigating to sign up screen');
    // navigation.navigate('SignUp');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/512/579/HD-wallpaper-dark-paw-prints-abstract-animals-black-cat-cool-feet-feline-fun-invert-kitty-pattern-pawprints-paws-pets-white.jpg' }}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            // source={require('./path-to-your-pet-logo.png')} // Update with your image path
            style={styles.logo}
          />
          <View style={styles.appNameContainer}>
            <Text style={styles.appName}>PetBnb</Text>
          </View>
        </View>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Login</Title>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              theme={{ colors: { text: '#000', primary: '#1E88E5' } }}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
              theme={{ colors: { text: '#000', primary: '#1E88E5' } }}
            />
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
              contentStyle={styles.buttonContent}
              color="#1E88E5"
            >
              Login
            </Button>
            <TouchableOpacity onPress={handleSignUp} style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account yet? Sign Up</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  appNameContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for contrast
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 120,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Ensure the text is visible on the background
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 12,
    elevation: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly opaque background
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#1E88E5',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff', // Background color for the TextInput
  },
  button: {
    marginTop: 16,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  signUpContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  signUpText: {
    color: '#1E88E5',
    textDecorationLine: 'underline',
  },
});