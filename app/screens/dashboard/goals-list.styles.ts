import { StyleSheet } from 'react-native';
import { color, spacing } from '../../theme';


export const styles = StyleSheet.create({
    itemsContainer: {
        paddingBottom: spacing[8],
    },
    itemRoot: {
        backgroundColor: 'transparent',
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[3],
        marginVertical: 1,
        marginHorizontal: spacing[1],
    },
    selected: {
        backgroundColor: color.primary,
    },
});
