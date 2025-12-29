import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Header = () => {
    return (
    <SafeAreaView style = {styles.header}>
        <Text style = {styles.title}>Penny Cook</Text>
    </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    header: {
        
    },
    title: {},
});