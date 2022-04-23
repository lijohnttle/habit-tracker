import './i18n';
import './utils/ignore-warnings';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { initFonts } from './theme/fonts';
import { AppNavigator } from './navigators';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import { ToggleStorybook } from '../storybook/toggle-storybook';
import { ErrorBoundary } from './screens/error/error-boundary';
import { LoadingScreen } from './screens';


export const App = () => {
    const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
    const [loadingDelayedComplete, setLoadingDelayComplete] = useState<Boolean>(false);

    useEffect(() => {
        ;(async () => {
            await initFonts(); // expo
            setupRootStore().then(setRootStore);
        })();
    }, []);

    if (!rootStore && !loadingDelayedComplete) {
        return (
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <ErrorBoundary catchErrors={"always"}>
                    <LoadingScreen onDelayComplete={() => setLoadingDelayComplete(true)} />
                </ErrorBoundary>
            </SafeAreaProvider>
        );
    }

    return (
        <ToggleStorybook>
            <RootStoreProvider value={rootStore}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <ErrorBoundary catchErrors={"always"}>
                        <AppNavigator />
                    </ErrorBoundary>
                </SafeAreaProvider>
            </RootStoreProvider>
        </ToggleStorybook>
    )
};
