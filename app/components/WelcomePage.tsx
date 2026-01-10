import { ImageBackground, StyleSheet, Text, View } from "react-native";

const welcomeBg = require("../../assets/images/chopping-board2.jpg");

export default function WelcomePage() {
    return (
    <View style={styles.container}>
        <ImageBackground source={welcomeBg} resizeMode="cover" style={styles.header}>
            <Text style={styles.title}>Welcome{"\n"}to{"\n"}Penny Cook</Text>
        </ImageBackground>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // borderTopLeftRadius: "",
        // borderTopRightRadius: "",
        
    },
    header: {
        width: '100%',
        height: '100%',
        flex: 1,
        
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 16,
        color: '#f76c09ff',
        textShadowColor: 'rgba(135, 204, 8, 0.75)',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 15
    },
});