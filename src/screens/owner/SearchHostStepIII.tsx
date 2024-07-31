import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, ScrollView, StyleSheet } from 'react-native';

export const SummaryScreen = ({ navigation, route }: any) => {
  const params = route.params;

  const calculateDaysBetweenDates = (startDate: Date, endDate: Date): number => {
    // Calculate the difference in milliseconds
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    // Convert milliseconds to days
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Convert startDate and endDate to Date objects if they are not already
  const start = new Date(params.startDate);
  const end = new Date(params.endDate);

  const totalDays = calculateDaysBetweenDates(start, end);

  const handleSearch = () => {
    navigation.navigate('Map Results', {
      ...route.params,
    });
  };

  console.log(JSON.stringify(route.params) + " SUMMARY");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/512/579/HD-wallpaper-dark-paw-prints-abstract-animals-black-cat-cool-feet-feline-fun-invert-kitty-pattern-pawprints-paws-pets-white.jpg' }}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Summary</Text>
          </View>

          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Pet Type: {params.petType}</Text>
            <Text style={styles.summaryText}>Age: {params.age}</Text>
            <Text style={styles.summaryText}>Behavior: {params.behavior}</Text>
            <Text style={styles.summaryText}>Start Date: {new Date(params.startDate).toDateString()}</Text>
            <Text style={styles.summaryText}>End Date: {new Date(params.endDate).toDateString()}</Text>
            <Text style={styles.summaryText}>Total days: {totalDays}</Text>
            <Text style={styles.summaryText}>Comments: {params.comments}</Text>
          </View>

          <TouchableOpacity onPress={handleSearch} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
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
  summaryContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for visibility
    padding: 16,
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
    color: '#000', // Black text color for contrast
    marginBottom: 8,
  },
  buttonContainer: {
    marginVertical: 16,
    width: '90%',
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
});