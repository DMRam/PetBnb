import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../src/screens/dashboard/DashboardScreen';
import { DashboardScreenTest } from '../../src/screens/dashboard/DashboardScreenTest';
import { TestScreen } from '../../src/screens/test/TestScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import { useLogged } from '../../src/hooks/logged_state/useLogged';
import { LogoutButton } from '../../src/components/buttons/LogoutButton';
import { CustomDrawerContent } from '../../src/components/drawer/CustomDrawerComponent';
import { SearchHome } from '../../src/screens/owner/SearchHome';
import { SearchHostStepI } from '../../src/screens/owner/SearchHostStepI';
import { SearchHostStepII } from '../../src/screens/owner/SearchHostStepII';
import { SummaryScreen } from '../../src/screens/owner/SearchHostStepIII';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerHome = ({ navigation }: any) => {
    const { onLoggedInOut } = useLogged();
    const loggedOut = () => {
        onLoggedInOut();
    };

    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={DashboardScreen} />
            {['Pet Profile', 'Owner Profile', 'Host Profile', 'Seller Profile', 'Settings'].map(screen => (
                <Drawer.Screen
                    key={screen}
                    name={screen}
                    component={TestScreen}
                    options={{
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={{ paddingLeft: 20 }}>
                                    <Icon name="arrow-back" size={25} color="#000" />
                                </View>
                            </TouchableOpacity>
                        ),
                    }}
                />
            ))}
        </Drawer.Navigator>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: route.name !== 'Main',
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
                headerLeft: () => {
                    console.log(route.name + " <---------")
                    if (route.name === 'Search Host Step II') {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Search Host Step I')}>
                                <View style={{ paddingLeft: 20 }}>
                                    <Icon name="arrow-back" size={25} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        );
                    } else if (['SettingsTab', 'ProfileTab', 'Search Host Step I', 'SearchTab'].includes(route.name)) {
                        return (
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
                        );

                    } else if (route.name === 'Summary') {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Search Host Step II')}>
                                <View style={{ paddingLeft: 20 }}>
                                    <Icon name="arrow-back" size={25} color="#fff" />
                                </View>
                            </TouchableOpacity>)
                    }
                    return undefined;
                },
            })}
        >
            <Tab.Screen
                name="Main"
                component={DrawerHome} // Displaying the Drawer within the bottom tabs
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
                    tabBarButton: () => null, // Hide this tab
                }}
            />
            <Tab.Screen
                name="SearchHome"
                component={SearchHome}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            />
            <Tab.Screen
                name="Search Host Step I"
                component={SearchHostStepI}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            />
            <Tab.Screen
                name="Search Host Step II"
                component={SearchHostStepII}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            />
            <Tab.Screen
                name="Summary"
                component={SummaryScreen}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
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
