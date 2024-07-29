import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../src/screens/dashboard/DashboardScreen';
import { DashboardScreenTest } from '../../src/screens/dashboard/DashboardScreenTest';
import { TestScreen } from '../../src/screens/test/TestScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import { SearchHome } from '../screens/owner/SearchHome';
import { useLogged } from '../../src/hooks/logged_state/useLogged';
import { LogoutButton } from '../../src/components/buttons/LogoutButton';
import { CustomDrawerContent } from '../../src/components/drawer/CustomDrawerComponent';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

interface Props {
    onLoggedOut: () => void
}

const DrawerHome = () => {
    const { onLoggedInOut } = useLogged();
    const loggedOut = () => {
        onLoggedInOut();
    };
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={DashboardScreen} />
            <Drawer.Screen
                name="Pet Profile"
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
                name="Owner Profile"
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
                name="Host Profile"
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
                name="Seller Profile"
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
            {/* <Drawer.Screen
                name="Logout"
                component={LogoutButton}
                options={{
                    drawerLabel: 'Logout',
                }}
            /> */}
        </Drawer.Navigator>
    );
};



const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: route.name === "Main" ? false : true,
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
                    if (route.name === 'Main') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'SettingsTab') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'SearchTab') {
                        iconName = focused ? 'search-outline' : 'search-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerLeft: (route.name === 'SettingsTab' || route.name === 'ProfileTab' || route.name === 'SearchHomeTab' || route.name === 'SearchTab') ? () => (
                    // Helps to get back to the main Home screen
                    <TouchableOpacity onPress={() => navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Main' }],
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
                name="Main"
                component={DrawerHome}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchHome}
                options={{
                    tabBarLabel: 'Search',
                }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={SearchHome}
                options={{
                    tabBarLabel: 'Settings',
                }}
            />
            <Tab.Screen
                name="MyTestTab"
                component={DashboardScreenTest}
                options={{
                    tabBarButton: () => null,
                }}
            />
            <Tab.Screen
                name="SearchHomeTab"
                component={SearchHome}
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
