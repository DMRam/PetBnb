import React from 'react';
import { StatusBar, View, StyleSheet, ScrollView, TouchableOpacity, Text, SafeAreaView, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const DashboardScreen = ({ navigation }: any) => {

    const onSearchHost = () => {
        navigation.navigate('Search Host Step I');
    };

    const onSearchProduct = () => {
        // Add navigation logic for Search Product
    };

    const onSearchServices = () => {
        // Add navigation logic for Search Services
    };

    const onSearchPetMating = () => {
        // Add navigation logic for Search PetMating
    };

    const onSearchVet = () => {
        // Add navigation logic for Search Vet
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle="light-content" backgroundColor="tomato" />
            <ImageBackground
                source={{ uri: 'https://w0.peakpx.com/wallpaper/512/579/HD-wallpaper-dark-paw-prints-abstract-animals-black-cat-cool-feet-feline-fun-invert-kitty-pattern-pawprints-paws-pets-white.jpg' }}
                style={styles.background}
            >
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <TouchableOpacity onPress={onSearchHost}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.title}>Search Host!</Title>
                                <Paragraph style={styles.paragraph}>Find the perfect host for your pet.</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSearchProduct}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.title}>Search Product!</Title>
                                <Paragraph style={styles.paragraph}>Discover products for your pet's needs.</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSearchServices}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.title}>Search Services!</Title>
                                <Paragraph style={styles.paragraph}>Explore services available for your pet.</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSearchPetMating}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.title}>Search PetMating!</Title>
                                <Paragraph style={styles.paragraph}>Find a mate for your pet.</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSearchVet}>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title style={styles.title}>Search Vet!</Title>
                                <Paragraph style={styles.paragraph}>Locate a veterinarian near you.</Paragraph>
                            </Card.Content>
                        </Card>
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
        marginTop:50,
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    card: {
        marginBottom: 16,
        width: '90%',
        borderRadius: 12,
        elevation: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
        color: '#1E88E5',
    },
    paragraph: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
    },
});