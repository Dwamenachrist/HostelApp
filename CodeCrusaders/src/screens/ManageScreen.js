import React from "react";
import { 
    View, Text, StyleSheet, Image, TouchableOpacity 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";  

const Manage = ({ navigation }) => { // Pass navigation prop for StackNavigator

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>My hostels</Text> 
            
            <View style={styles.hostelCard}> 
                <Image 
                    source={require("../assets/makassela.png")} 
                    style={styles.hostelImage}
                />
                <View style={styles.cardTextContainer}>
                    <Text style={styles.hostelName}>Hostel Name</Text>
                    <Text>Additional hostel info...</Text> 
                </View>
            </View>

            <View style={styles.buttonContainer}>
			
			<View>
                <Button
				onPress={() => navigation.navigate('Payment')}
				style={styles.button}
				>
                    Delete                     
				</Button>
			</View>
			<View>
			<Button
				onPress={() => navigation.navigate('View')}
				style={styles.button}
				>
                    View                     
				</Button> 
			</View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    hostelCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15, 
        borderWidth: 1,
        borderColor: '#ccc', 
        borderRadius: 8,  
        marginBottom: 20, 
    },
    hostelImage: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    hostelName: {
        fontSize: 18,
        fontWeight: '500',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: 100,
		heaight: 10,
    }
});

export default Manage;
