import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen, DemoScreen, DemoListScreen, LoadingScreen, DashboardScreen } from '../screens'
import { navigationRef } from './navigation-utilities'


export type NavigatorParamList = {
    welcome: undefined,
    demo: undefined,
    demoList: undefined,
    loading: undefined,
    dashboard: undefined,
};

const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="loading"
            >
            <Stack.Screen name="loading" component={LoadingScreen} />
            <Stack.Screen name="dashboard" component={DashboardScreen} />
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="demo" component={DemoScreen} />
            <Stack.Screen name="demoList" component={DemoListScreen} />
        </Stack.Navigator>
    )
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
            <AppStack />
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
const exitRoutes = ['loading', 'dashboard', 'welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
