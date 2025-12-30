import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
    return (
    <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Welcome{"\n"}to{"\n"}Penny Cook</Text>
    </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#1acc49ff',
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});