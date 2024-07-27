import React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../src/screens/dashboard/DashboardScreen';
import { DashboardScreenTest } from '../../src/screens/dashboard/DashboardScreenTest';
import { TestScreen } from '../../src/screens/test/TestScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={DashboardScreen} />
            <Drawer.Screen
                name="TestScreen"
                component={TestScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{ paddingLeft: 20 }}>
                                <Icon name="arrow-back" size={25} color="#000" />
                            </View>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Drawer.Screen
                name="Settings"
                component={TestScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{ paddingLeft: 20 }}>
                                <Icon name="arrow-back" size={25} color="#000" />
                            </View>
                        </TouchableOpacity>
                    ),
                })}
            />
            {/* Add more Drawer Screens here */}
        </Drawer.Navigator>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: route.name === "Home" ? false : true,
                headerStyle: {
                    backgroundColor: '#6EC1E4', // Light blue background color
                },
                headerTintColor: '#fff', // White text color
                headerTitleStyle: {
                    fontWeight: 'bold', // Bold text style
                },
                tabBarStyle: {
                    backgroundColor: '#f8f9fa', // Light grey background for tab bar
                },
                tabBarActiveTintColor: '#6EC1E4', // Active tab icon color
                tabBarInactiveTintColor: 'gray', // Inactive tab icon color
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerLeft: (route.name === 'Settings' || route.name === 'Profile') ? () => (
                    // Helps to get back to the main Home screen
                    <TouchableOpacity onPress={() => navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        })
                    )}>
                        <View style={{ paddingLeft: 20 }}>
                            <Icon name="arrow-back" size={25} color="#fff" />
                        </View>
                    </TouchableOpacity>
                ) : undefined,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeDrawer}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={DashboardScreen} // Replace with actual SettingsScreen
                options={{
                    tabBarLabel: 'Settings',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={DashboardScreen} // Replace with actual ProfileScreen
                options={{
                    tabBarLabel: 'Profile',
                }}
            />
            <Tab.Screen
                name="MyTest"
                component={DashboardScreenTest}
                options={{
                    tabBarButton: () => null,
                }}
            />
        </Tab.Navigator>
    );
};

const RootNavigator = () => {
    return (

        <BottomTabNavigator />
    );
};

export const AppNavigator = () => {
    return (
        <RootNavigator />
    );
};
