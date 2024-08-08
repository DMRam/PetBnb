import React, { useState } from 'react';
import { StatusBar, View, StyleSheet, ScrollView, SafeAreaView, ImageBackground, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export const SearchHostStepII = ({ navigation, route }: any) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  // const [comments, setComments] = useState<string>('');
  const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const onStartDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onEndDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  const handleConfirmSelection = () => {
    console.log('Confirmed Start Date:', startDate);
    console.log('Confirmed End Date:', endDate);
    // console.log('Additional Comments:', comments);

    navigation.navigate('Summary', {
      ...route.params,
      startDate,
      endDate,
      // comments,
    });
  };

  const renderConfirmation = () => (
    <View style={styles.confirmationContainer}>
      <Text style={styles.confirmationText}>Confirm your selections:</Text>
      <Text style={styles.confirmationDetail}>Start Date: {startDate?.toDateString()}</Text>
      <Text style={styles.confirmationDetail}>End Date: {endDate?.toDateString()}</Text>
      {/* <Text style={styles.confirmationDetail}>Comments: {comments}</Text> */}
      <TouchableOpacity onPress={handleConfirmSelection} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.infoTextConfirmation}>If this is not correct, just change above to update.</Text>
    </View>
  );

  const handlerDatePickerRendering = () => {
    setShowStartDatePicker(!showStartDatePicker)
    setShowEndDatePicker(true)
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/512/579/HD-wallpaper-dark-paw-prints-abstract-animals-black-cat-cool-feet-feline-fun-invert-kitty-pattern-pawprints-paws-pets-white.jpg' }}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Schedule</Text>
          </View>

          <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.datePickerButton}>
            <Text style={styles.datePickerButtonText}>{startDate ? startDate.toDateString() : 'Select start date'}</Text>
          </TouchableOpacity>

          {showStartDatePicker && (
            <View style={styles.pickerContainer}>
              <DateTimePicker
                value={startDate || new Date()}
                mode="date"
                display="spinner"
                onChange={onStartDateChange}
                minimumDate={new Date(2024, 0, 1)}
                maximumDate={new Date(2030, 11, 31)}
                style={styles.datePicker}
              />
            </View>
          )}

          <TouchableOpacity onPress={() => handlerDatePickerRendering()} style={styles.datePickerButton}>
            <Text style={styles.datePickerButtonText}>{endDate ? endDate.toDateString() : 'Select end date'}</Text>
          </TouchableOpacity>

          {showEndDatePicker && (
            <View style={styles.pickerContainer}>
              <DateTimePicker
                value={endDate || new Date()}
                mode="date"
                display="spinner"
                onChange={onEndDateChange}
                minimumDate={new Date(2024, 0, 1)}
                maximumDate={new Date(2030, 11, 31)}
                style={styles.datePicker}
              />
            </View>
          )}

          {/* <TextInput
            style={styles.textInput}
            placeholder="Enter any additional comments..."
            placeholderTextColor="gray"
            multiline
            value={comments}
            onChangeText={setComments}
          /> */}

          {!showConfirmation && (
            <>
              {startDate && endDate ? (
                // renderConfirmation()
                <TouchableOpacity onPress={() => setShowConfirmation(true)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Review & Confirm</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.infoText}>Please select start and end dates and enter comments to proceed.</Text>
              )}
            </>
          )}

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
  datePickerButton: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    alignItems: 'center',
  },
  datePickerButtonText: {
    fontSize: 16,
    color: 'black',
  },
  pickerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background for visibility
    borderRadius: 8, // Rounded corners
    padding: 16, // Padding for spacing around the date picker
    alignItems: 'center', // Center content
    marginVertical: 16, // Vertical margin for spacing
  },
  datePicker: {
    width: '100%',
    height: 150,
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
  confirmationContainer: {
    marginVertical: 24,
    width: '90%',
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
    textAlign: 'center',
  },
  infoTextConfirmation: {
    fontSize: 14,
    color: '#000',
    marginVertical: 16,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    marginBottom: 16,
  },
});