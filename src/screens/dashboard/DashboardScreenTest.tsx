import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';

export const DashboardScreenTest = ({ navigation }:any) => {

    const onNavigateBack = () => {
        navigation.navigate('My')
    }
    return (
        <View style={styles.container}>
            <Appbar.Header>
                {/* <Appbar.Content title="Dashboard" /> */}
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Test to PetBnb!</Title>
                        <Paragraph>This is your dashboard.</Paragraph>
                    </Card.Content>
                </Card>
                
            </ScrollView>

            <TouchableOpacity onPress={onNavigateBack} style={{flex:1, alignItems:'center'}}><Text>GO BACK</Text></TouchableOpacity>
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