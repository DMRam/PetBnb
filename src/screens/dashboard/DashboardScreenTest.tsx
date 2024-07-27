import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const DashboardScreenTest = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle="light-content" backgroundColor="tomato" />
            <View style={styles.container}>
                <Text style={styles.text}>Dashboard Screen Test</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <Card style={styles.card} >
                    <Card.Content>
                        <Title>Test to PetBnb!</Title>
                        <Paragraph>This is your dashboard.</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'tomato',
    },
    container: {
        flex: 1,
        backgroundColor: 'tomato',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    scrollView: {
        padding: 16,
    },
    card: {
        marginBottom: 16,
        // width: '90%',
        alignItems: 'center',
        // alignSelf: 'center'
    },
});
