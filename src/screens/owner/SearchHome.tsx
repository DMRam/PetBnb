import React, { useState } from 'react';
import { StatusBar, View, StyleSheet, ScrollView, SafeAreaView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Card, Title, Paragraph } from 'react-native-paper';

export const SearchHome = ({ navigation }: any) => {
  const [petValue, setPetValue] = useState<string | null>(null);
  const [ageValue, setAgeValue] = useState<string | null>(null);
  const [behaviorValue, setBehaviorValue] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const petItems = [
    { label: 'Dogs', value: 'dogs' },
    { label: 'Cats', value: 'cats' },
    { label: 'Birds', value: 'birds' },
    { label: 'Rabbits', value: 'rabbits' },
    { label: 'Reptiles', value: 'reptiles' },
    // Add more options as needed
  ];

  const ageItems = [
    { label: 'Puppy/Kitten (0-1 years)', value: 'puppy_kitten' },
    { label: 'Young (1-3 years)', value: 'young' },
    { label: 'Adult (3-7 years)', value: 'adult' },
    { label: 'Senior (7+ years)', value: 'senior' },
  ];

  const behaviorItems = [
    { label: 'Friendly', value: 'friendly' },
    { label: 'Shy', value: 'shy' },
    { label: 'Playful', value: 'playful' },
    { label: 'Calm', value: 'calm' },
  ];

  const handleConfirmSelection = () => {
    // You can perform further actions or navigation here
    console.log('Confirmed Pet Type:', petValue);
    console.log('Confirmed Age:', ageValue);
    console.log('Confirmed Behavior:', behaviorValue);

    // Navigate to another screen or perform desired action
    navigation.navigate('Search Host Step I', {
      petType: petValue,
      age: ageValue,
      behavior: behaviorValue,
    });
  };

  const renderConfirmation = () => (
    <View style={styles.confirmationContainer}>
      <Text style={styles.confirmationText}>Confirm your selections:</Text>
      <Text style={styles.confirmationDetail}>Pet Type: {petValue}</Text>
      <Text style={styles.confirmationDetail}>Age: {ageValue}</Text>
      <Text style={styles.confirmationDetail}>Behavior: {behaviorValue}</Text>
      <TouchableOpacity onPress={handleConfirmSelection} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue</Text>

      </TouchableOpacity>
      <Text style={styles.infoTextConfirmation}>If is not correct, just change above to update.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/512/579/HD-wallpaper-dark-paw-prints-abstract-animals-black-cat-cool-feet-feline-fun-invert-kitty-pattern-pawprints-paws-pets-white.jpg' }}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Find Your Perfect Pet Match</Text>
          </View>

          <RNPickerSelect
            onValueChange={(value) => setPetValue(value)}
            items={petItems}
            placeholder={{ label: 'Select a pet type...', value: null }}
            style={pickerSelectStyles}
            value={petValue}
          />

          <RNPickerSelect
            onValueChange={(value) => setAgeValue(value)}
            items={ageItems}
            placeholder={{ label: 'Select age...', value: null }}
            style={pickerSelectStyles}
            value={ageValue}
          />

          <RNPickerSelect
            onValueChange={(value) => setBehaviorValue(value)}
            items={behaviorItems}
            placeholder={{ label: 'Select behavior...', value: null }}
            style={pickerSelectStyles}
            value={behaviorValue}
          />
          {!showConfirmation &&
            <>
              {petValue && ageValue && behaviorValue ? (
                <TouchableOpacity onPress={() => setShowConfirmation(true)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Review & Confirm</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.infoText}>Please select all options to proceed.</Text>
              )}
            </>
          }


          {showConfirmation && renderConfirmation()}

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center', // Center the items horizontally
  },
  headerContainer: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  buttonContainer: {
    marginVertical: 16,
    width: '90%', // Ensure the button is centered with a margin
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#1E88E5',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  confirmationContainer: {
    marginVertical: 24,
    width: '90%', // Center the confirmation container with a margin
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  confirmationDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 16,
  },
  infoTextConfirmation: {
    fontSize: 14,
    color: '#000',
    marginVertical: 16,
  },



});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // Ensure the text is not cut off
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    width: '100%', // Full width to center
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    width: '100%', // Full width to center
  },
});
