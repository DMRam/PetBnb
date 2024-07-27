import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../src/screens/dashboard/DashboardScreen';
import { DashboardScreenTest } from '../../src/screens/dashboard/DashboardScreenTest';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const BottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
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
                    let iconName: string = '';

                    console.log(route.name + " <---------------")
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarIcon: ({ color, size }) => (
                    //     <AntDesign name="home" size={size} color={color} />
                    // ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Settings',
                    // tabBarIcon: ({ color, size }) => (
                    //     <Icon name="stepbackward" color={color} size={size} />
                    // ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Profile',
                    // tabBarIcon: ({ color, size }) => (
                    //     <Icon name="stepbackward" color={color} size={size} />
                    // ),
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
