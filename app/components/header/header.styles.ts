import { StyleSheet } from 'react-native';
import { spacing } from '../../theme';

export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: spacing[2],
        paddingBottom: spacing[2],
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        textAlign: 'left',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: spacing[5],
    },
    buttonRight: {
        marginRight: spacing[2],
        width: 32,
        height: 32,
    }
});
