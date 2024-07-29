import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useLogged } from '../../hooks/logged_state/useLogged';

export const LogoutButton = () => {
    const navigation = useNavigation();
    const { onLoggedInOut } = useLogged();

    const handleLogout = () => {
        onLoggedInOut();
        // navigation.closeDrawer(); // Optionally close the drawer after logging out
    };

    return (
        <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
            <Icon name="log-out-outline" size={25} color="#000" />
            <Text style={{ marginLeft: 15, fontSize: 16, color: '#000' }}>Logout</Text>
        </TouchableOpacity>
    );
};
