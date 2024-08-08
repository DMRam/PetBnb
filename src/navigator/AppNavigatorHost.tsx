import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreenHost } from '../screens/host/dashboard/DashboardScreenHost';
import { TestScreen } from '../screens/test/TestScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import { useLogged } from '../hooks/logged_state/useLogged';
import { CustomDrawerContent } from '../components/drawer/CustomDrawerComponent';
import { SearchHostStepI } from '../screens/owner/host_searching/SearchHostStepI';
import { SearchHostStepII } from '../screens/owner/host_searching/SearchHostStepII';
import { SummaryScreen } from '../screens/owner/host_searching/SearchHostStepIII';
import { MapResult } from '../components/map/MapResult';
import { Settings } from '../screens/host/host_settings/Settings';
import { useLoggedUserRole } from '../../src/hooks/logged_state/useLoggedUserRole';
import { SellerScreen } from '../screens/host/my_store/create_products/SellerScreen';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerHomeHost = ({ navigation }: any) => {
    const { onLoggedInOut } = useLogged();
    const loggedOut = () => {
        onLoggedInOut();
    };

    // This is handling the Screens to display base 
    // on the elements clicked and its names
    const getScreenComponent = (screenName: string) => {
        switch (screenName) {
            case 'Seller Profile':
                return SellerScreen;
            case 'Host Profile':
            case 'My Hosted':
            case 'Settings':
                return TestScreen; // Replace with the actual components for these screens
            default:
                return TestScreen; // Default component if none match
        }
    };

    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Host Dashboard" component={DashboardScreenHost} />
            {['Host Profile', 'Seller Profile', 'My Hosted', 'Settings'].map(screen => (
                <Drawer.Screen
                    key={screen}
                    name={screen}
                    component={getScreenComponent(screen)}
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

const BottomTabNavigatorHost = () => {

    const { onLoggedUserRole } = useLoggedUserRole()
    const switchToOwner = () => {
        onLoggedUserRole('Owner')
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
                    } else if (route.name === 'Host Home') {
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
                component={DrawerHomeHost} // Displaying the Drawer within the bottom tabs
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            {/* TODO */}
            {/* This tab needs to handle the global state, like Host/Owner */}
            {/* Additionally i will need an Vet login/Session/Role */}
            <Tab.Screen
                name="Host Home"
                component={DashboardScreenHost}
                options={{
                    tabBarLabel: 'Switch to Owner',
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        switchToOwner();
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
            <Tab.Screen
                name="Coming Guest"
                component={DashboardScreenHost}
                options={{
                    tabBarButton: () => null, // Hide this tab
                }}
            />
            {/* <Tab.Screen
                name="Incomes"
                component={SearchHome}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            /> */}
            <Tab.Screen
                name="My Products"
                component={SearchHostStepI}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            />
            <Tab.Screen
                name="My Services"
                component={SearchHostStepII}
                options={{
                    tabBarButton: () => null, // Hide this tab but making it accessible 
                }}
            />
            <Tab.Screen
                name="Messages"
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

const RootNavigatorHost = () => {
    return (
        <BottomTabNavigatorHost />
    );
};

export const AppNavigatorHost = () => {
    return (
        <RootNavigatorHost />
    );
};
