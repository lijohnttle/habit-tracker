import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerNavigationProp } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { NavigatorParamList } from './app-navigator';
import { nameof } from '../utils/code-extensions';
import { color } from '../theme';


const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundComplementary,
    },
    itemLabel: {
        color: color.textComplementary,
    },
});

export const Menu = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} style={styles.root}>
            <View>
                <DrawerItem
                    label="DASHBOARD"
                    labelStyle={styles.itemLabel}
                    onPress={() => props.navigation.navigate(nameof<NavigatorParamList>('dashboard'))} />
                <DrawerItem
                    label="WELCOME"
                    labelStyle={styles.itemLabel}
                    onPress={() => props.navigation.navigate(nameof<NavigatorParamList>('goals'))} />
            </View>
        </DrawerContentScrollView>
    );
};