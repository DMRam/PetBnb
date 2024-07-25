import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';

export const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome to PetBnb!</Title>
            <Paragraph>This is your dashboard.</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Your Pets</Title>
            <Paragraph>Manage your pets here.</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Bookings</Title>
            <Paragraph>View and manage your bookings.</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});