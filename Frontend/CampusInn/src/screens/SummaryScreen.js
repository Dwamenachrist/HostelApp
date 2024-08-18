import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRoute } from "@react-navigation/native";
import
    Button from "../components/Button";

const Summary = ({ navigation }) => {
    const route = useRoute();

    const {
        hostel = "N/A",
        roomType = "N/A",
        price = 0,
        checkIn = "N/A",
        checkOut = "N/A",
        image = null,
    } = route.params || {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hostel}>
                {image ? (
                    <Image source={image} style={styles.hostelImage} />
                ) : (
                    <View style={styles.noImagePlaceholder}>
                        <Text>No Image Available</Text>
                    </View>
                )}
                <View style={styles.hostelDetails}>
                    <Text style={styles.hostelName}>{hostel}</Text>
                    <Text>{roomType}</Text>
                    <Text>GHc {price.toFixed(2)} /semester</Text>
                </View>
            </View>

            <View style={styles.bookingInfo}>
                <View style={styles.infoRow}>
                    <Text>Check-in:</Text>
                    <Text>{checkIn}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text>Check-out:</Text>
                    <Text>{checkOut}</Text>
                </View>
            </View>

            <View style={styles.line} />

            <View style={styles.amountContainer}>
                <View style={styles.infoRow}>
                    <Text>Amount</Text>
                    <Text>GHc {price.toFixed(2)}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text>Total</Text>
                    <Text>GHc {price.toFixed(2)}</Text>
                </View>
            </View>

            <Button onPress={() => navigation.navigate('Payment')}>
                <Text>CONTINUE PAYMENT</Text> {/* Wrap button text in <Text> */}
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    headingText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
    hostel: {
        flexDirection: "row",
        marginTop: 10,
    },
    hostelImage: {
        width: 100,
        height: 100,
    },
    hostelDetails: {
        marginLeft: 20,
    },
    hostelName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    bookingInfo: {
        marginTop: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    line: {
        borderBottomColor: "#333333",
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    amountContainer: {  // Corrected name
        flexDirection: 'column',
        justifyContent: "space-between",
        marginTop: 20,
    },
});

export default Summary;
