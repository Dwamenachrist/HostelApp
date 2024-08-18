import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Manage = ({ navigation }) => {
    const [hostels, setHostels] = useState([
        {
            id: 1,
            name: "Hostel Name 1",
            image: require("../assets/makassela.png"),
        },
        {
            id: 2,
            name: "Hostel Name 2",
            image: require("../assets/makassela.png"),
        },
        {
            id: 3,
            name: "Hostel Name 3",
            image: require("../assets/makassela.png"),
        },
    ]);

    const handleDelete = (id) => {
        Alert.alert(
            "Delete Hostel",
            "Are you sure you want to delete this hostel?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        setHostels(hostels.filter((hostel) => hostel.id !== id));
                    },
                    style: "destructive",
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>My Hostels</Text>

            {hostels.map((hostel) => (
                <View key={hostel.id} style={styles.cardContainer}>
                    <View style={styles.hostelCard}>
                        <Image source={hostel.image} style={styles.hostelImage} />
                        <Text style={styles.hostelName}>{hostel.name}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => handleDelete(hostel.id)}
                            style={[styles.button, styles.deleteButton]}
                        >
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('View')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    cardContainer: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 3, // Elevation for Android
    },
    hostelCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    hostelImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    hostelName: {
        fontSize: 18,
        fontWeight: "500",
        color: "#555",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        backgroundColor: "#007bff",
        alignItems: "center",
    },
    deleteButton: {
        backgroundColor: "#ff4d4f",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default Manage;
