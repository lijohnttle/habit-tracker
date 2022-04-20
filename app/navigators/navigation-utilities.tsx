import { useEffect } from "react"
import { BackHandler } from "react-native"
import {
    PartialState,
    NavigationState,
    NavigationAction,
    createNavigationContainerRef,
} from "@react-navigation/native"
import { canExit } from './app-navigator'
import { StackNavigationProp } from '@react-navigation/stack'

/* eslint-disable */
export const RootNavigation = {
    navigate(_name: string, _params?: any) {},
    goBack() {},
    resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
    getRootState(): NavigationState {
        return {} as any
    },
    dispatch(_action: NavigationAction) {},
}
/* eslint-enable */

export const navigationRef = createNavigationContainerRef()

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>) {
    const route = state.routes[state.index]

    // Found the active route -- return the name
    if (!route.state) return route.name

    // Recursive call to deal with nested routers
    return getActiveRouteName(route.state)
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(navigation: StackNavigationProp<any, any>) {
    useEffect(() => {
        const onBackPress = () => {
            if (!navigationRef.isReady()) {
                return false;
            }

            const routeName = getActiveRouteName(navigationRef.getRootState());

            if (canExit(routeName)) {
                BackHandler.exitApp();
                return true;
            }

            if (navigationRef.canGoBack()) {
                navigationRef.goBack();
                return true;
            }

            return false;
        }

        const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress);

        return () => backHandler.remove();
    }, [navigation]);
}

/**
 * use this to navigate to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate(name: any, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name as never, params as never)
    }
}

export function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack()
    }
}

export function resetRoot(params = { index: 0, routes: [] }) {
    if (navigationRef.isReady()) {
        navigationRef.resetRoot(params)
    }
}
