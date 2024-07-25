import React from 'react'
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export const TestScreen = () => {
    const theme = useTheme();

    return <View style={{ backgroundColor: theme.colors.secondaryContainer, flex: 1 }} >
        <Text>
            Test Screen
        </Text>
    </View>;
}


