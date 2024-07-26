import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreenTest } from '../../src/screens/dashboard/DashboardScreenTest';
import { DashboardScreen } from '../../src/screens/dashboard/DashboardScreen';
import { Navigator } from './Navigator';

const Tab = createBottomTabNavigator();

export const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardScreen} />
            <Tab.Screen name="Settings" component={DashboardScreen} />
            <Tab.Screen name="Profile" component={DashboardScreen} />
            <Tab.Screen
                name="MyTest"
                component={DashboardScreenTest}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Tab.Navigator>
    );
}