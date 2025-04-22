import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.text}>Ir para a página de Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
    },
    text: {
        fontSize: 20,
        color: "white",
        marginBottom: 30,
        fontWeight: "bold",
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },
});