import { StyleSheet } from 'react-native';
import { color, typography } from '../../theme';


export const styles = StyleSheet.create({
    centerHorz: {
        alignItems: "center",
        flex: 1,
    },
    centerVert: {
        flex: 1,
        height: "90%",
        justifyContent: "center",
        marginBottom: 48,
        position: "absolute",
        width: "100%",
    },
    header: {
        color: color.text,
        fontFamily: typography.primary,
        fontSize: 28,
    },
    headerWrapper: {
        alignItems: "center",
    },
    loader: {
        marginTop: 48,
    },
    logoWrapper: {
        alignSelf: "flex-start",
        backgroundColor: color.primary,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        position: "absolute",
    },
    root: {
        backgroundColor: color.background,
        flex: 1,
    },
});
