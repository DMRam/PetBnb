import React from 'react';
import { StatusBar, View, StyleSheet, ScrollView, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';

export const DashboardScreen = ({ navigation }: any) => {

    const onNavigateBack = () => {
        navigation.navigate('MyTest')
    }

    const onSearchHost = () => {
        navigation.navigate('SearchHome')
    }
    const onSearchProduct = () => {

    }
    const onSearchServices = () => {

    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle="light-content" backgroundColor="tomato" />
            <View style={styles.container}>
                {/* <Text style={styles.text}>Dashboard Screen Test</Text> */}
            </View>
            <ScrollView style={styles.scrollView}>
                <TouchableOpacity onPress={onSearchHost}>
                    <Card style={styles.card} >
                        <Card.Content>
                            <Title>Search Host!</Title>
                            <Paragraph>This is your dashboard.</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
                <Card style={styles.card} >
                    <Card.Content>
                        <Title>Search Product!</Title>
                        <Paragraph>This is your dashboard.</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card} >
                    <Card.Content>
                        <Title>Search Services!</Title>
                        <Paragraph>This is your dashboard.</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
            {/* <TouchableOpacity onPress={onNavigateBack} style={{ flex: 1, alignItems: 'center' }}><Text>GO BACK</Text></TouchableOpacity> */}
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




//             
