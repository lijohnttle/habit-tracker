import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AutoImage, Screen, Text } from '../../components';
import { color } from '../../theme';
import { styles } from './loading-screen.styles';

const loader = require('./loader.gif');


export const LoadingScreen = ({ onDelayComplete }) => {
    useEffect(() => {
        setTimeout(() => onDelayComplete(), 3000);
    }, []);

    return (
        <View testID="LoadingScreen" style={styles.root}>
            <Screen preset="fixed" statusBar="hidden" backgroundColor={color.transparent}>
                <View style={[styles.centerVert, styles.centerHorz]}>
                    <Text style={styles.header} text="HABIT" />
                    <Text style={styles.header} text="TRACKER" />

                    <AutoImage style={styles.loader} source={loader} />
                </View>

                <View style={styles.logoWrapper}>
                    <Text text="LIJOHNTTLE" />
                </View>
            </Screen>
        </View>
    );
};
