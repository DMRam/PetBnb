import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLogged } from '../../hooks/logged_state/useLogged';

export const CustomDrawerContent = (props:any) => {
    const { onLoggedInOut } = useLogged();

    const handleLogout = () => {
        onLoggedInOut();
        props.navigation.closeDrawer(); // Optionally close the drawer after logging out
    };

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={handleLogout}
                icon={({ color, size }) => (
                    <Icon name="log-out-outline" size={size} color={color} />
                )}
            />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#f4f4f4'
    },
    logoutText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#000'
    }
});