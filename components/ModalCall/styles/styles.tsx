import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A110A',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        gap: 8,
    },
    headerText: {
        color: '#9ca3af', // gray-400
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    statusText: {
        color: '#f97316', // orange-500
        fontWeight: 'bold',
        letterSpacing: 3,
        marginBottom: 8,
        textTransform: 'uppercase',
        fontSize: 12,
    },
    callerName: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
    },
    timerText: {
        color: '#9ca3af',
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 48,
    },
    avatarContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ringOuter: {
        position: 'absolute',
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 1,
        borderColor: 'rgba(234, 88, 12, 0.1)',
    },
    ringMiddle: {
        position: 'absolute',
        width: 240,
        height: 240,
        borderRadius: 120,
        borderWidth: 1,
        borderColor: 'rgba(234, 88, 12, 0.2)',
    },
    avatarWrapper: {
        zIndex: 10,
        padding: 4,
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: 'rgba(124, 45, 18, 0.3)',
    },
    avatarImage: {
        width: 192,
        height: 192,
        borderRadius: 96,
        borderWidth: 4,
        borderColor: '#3D2616',
    },
    badgeContainer: {
        position: 'absolute',
        bottom: -16,
        zIndex: 20,
    },
    badgeButton: {
        backgroundColor: '#5C2E0A',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: 'rgba(234, 88, 12, 0.5)',
    },
    badgeText: {
        color: '#fb923c',
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    controlsContainer: {
        paddingBottom: 64,
        alignItems: 'center',
    },
    speakerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        gap: 48,
    },
    speakerWrapper: {
        alignItems: 'center',
    },
    speakerButton: {
        backgroundColor: '#ea580c',
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#f97316',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    speakerText: {
        color: '#f97316',
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    hangupButton: {
        backgroundColor: '#ef4444',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#7f1d1d',
        shadowOffset: { width: 0, height: 25 },
        shadowOpacity: 0.5,
        shadowRadius: 50,
        elevation: 20,
    }
});

export default styles;

