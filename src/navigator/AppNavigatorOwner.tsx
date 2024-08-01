import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreenOwner } from '../screens/dashboard/DashboardScreenOwner';
import { TestScreen } from '../screens/test/TestScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import { useLogged } from '../hooks/logged_state/useLogged';
import { LogoutButton } from '../components/buttons/LogoutButton';
import { CustomDrawerContent } from '../components/drawer/CustomDrawerComponent';
import { SearchHome } from '../screens/owner/SearchHome';
import { SearchHostStepI } from '../screens/owner/SearchHostStepI';
import { SearchHostStepII } from '../screens/owner/SearchHostStepII';
import { SummaryScreen } from '../screens/owner/SearchHostStepIII';
import { MapResult } from '../screens/map/MapResult';
import { Settings } from '../screens/app/Settings';
import { HostHome } from '../screens/host/HostHome';
import { useLoggedUserRole } from '../../src/hooks/logged_state/useLoggedUserRole';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerHomeOwner = ({ navigation }: any) => {
    const { onLoggedInOut } = useLogged();
    const loggedOut = () => {
        onLoggedInOut();
    };

    return (
        <Drawer.Navigator initialRouteName="Owner Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Owner Home" component={DashboardScreenOwner} />
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

const BottomTabNavigatorOwner = () => {
    const { onLoggedUserRole } = useLoggedUserRole()

    const switchToHost = () => {
        onLoggedUserRole("Host")
    }
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
                    } else if (route.name === 'Owner Home') {
                        iconName = focused ? 'swap-horizontal-outline' : 'swap-horizontal-outline';
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
                    } else if (['SettingsTab', 'ProfileTab', 'Search Host Step I', 'Host Home', 'Map Results'].includes(route.name)) {
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
                component={DrawerHomeOwner} // Displaying the Drawer within the bottom tabs
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            {/* TODO */}
            {/* This tab needs to handle the global state, like Host/Owner */}
            {/* Additionally i will need an Vet login/Session/Role */}
            <Tab.Screen
                name="Owner Home"
                component={HostHome}
                options={{
                    tabBarLabel: 'Switch to Host',
                }
                }
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        switchToHost();
                        e.preventDefault();
                    },
                })}
            />
            <Tab.Screen
                name="SettingsTab"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                }}
            />
            {/* <Tab.Screen
                name="MyTestTab"
                component={DashboardScreenTest}
                options={{
                    tabBarButton: () => null, // Hide this tab
                }}
            /> */}
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
            <Tab.Screen
                name="Map Results"
                component={MapResult}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            />
        </Tab.Navigator>
    );
};

const RootNavigatorOwner = () => {
    return (
        <BottomTabNavigatorOwner />
    );
};

export const AppNavigatorOwner = () => {
    return (
        <RootNavigatorOwner />
    );
};
