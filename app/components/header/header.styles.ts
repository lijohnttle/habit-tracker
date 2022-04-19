import { StyleSheet } from 'react-native';
import { spacing } from '../../theme';

export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        paddingHorizontal: spacing[5],
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
    },
});
