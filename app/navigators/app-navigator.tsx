import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { WelcomeScreen, DashboardScreen } from '../screens';
import { navigationRef } from './navigation-utilities';
import { createDrawerNavigator } from '@react-navigation/drawer';


export type NavigatorParamList = {
    welcome: undefined,
    demo: undefined,
    demoList: undefined,
    dashboard: undefined,
    goals: undefined,
};

const Drawer = createDrawerNavigator<NavigatorParamList>();

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="dashboard">
            <Drawer.Screen name="dashboard" component={DashboardScreen} options={{ title: 'DASHBOARD' }} />
            <Drawer.Screen name="goals" component={WelcomeScreen} options={{ title: 'GOALS' }} />
        </Drawer.Navigator>
    );
};

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {};

export const AppNavigator = (props: NavigationProps) => {
    const colorScheme = useColorScheme()
    return (
        <NavigationContainer
            ref={navigationRef}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            {...props}
            >
            <AppDrawer />
        </NavigationContainer>
    )
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['dashboard', 'welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
