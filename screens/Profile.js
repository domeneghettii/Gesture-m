import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://wallpapers.com/images/hd/vampire-diaries-dark-theme-io3s7516di18yqip.jpg",
                    }}
                />
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
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },
});