import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Image 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const HostelInfo = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Locationn</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.infoItem}>Total number of rooms</Text>
                <Text style={styles.infoItem}>Vacant Rooms</Text>
                <Text style={styles.infoItem}>Occupied Rooms</Text>
            </View>

			<View>
				<Button>
					Add a room
				</Button>
			</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    hostelImage: {
        width: '100%', 
        height: 200, 
        marginBottom: 15,
    },
    detailsContainer: {
        marginBottom: 20, 
    },
    hostelName: {
        fontSize: 20,
        marginBottom: 10,
    },
    infoItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default HostelInfo;
