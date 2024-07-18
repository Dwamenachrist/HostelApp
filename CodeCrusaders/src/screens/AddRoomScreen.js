import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import Button from '../components/Button';

const AddRoom = () => {
    const [hostelName, setHostelName] = useState('');
    const [roomType, setRoomType] = useState('One in a room'); 
    const [roomNumber, setRoomNumber] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.hostelNameInput}
                    value={hostelName}
                    onChangeText={setHostelName}
                    placeholder="Hostel name"
                />
                <Text style={styles.title}>Add a room</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Select room type:</Text>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerValue}>{roomType}</Text>
                </View>

                <Text style={styles.label}>Room number:</Text>
                <TextInput
                    style={styles.input}
                    value={roomNumber}
                    onChangeText={setRoomNumber}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.uploadButton}>
                    <Text style={styles.uploadButtonText}>Upload pictures</Text>
                    <View style={styles.plusIconContainer}> 
                        <Text style={styles.plusIcon}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Button style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    hostelNameInput: {
        fontSize: 24,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    pickerContainer: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    pickerValue: {
        fontSize: 16,
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    uploadButtonText: {
        fontSize: 16,
        marginRight: 10,
    },
    plusIconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusIcon: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddRoom;
