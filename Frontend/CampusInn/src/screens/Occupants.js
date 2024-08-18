import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const occupants = [
  { id: '1', name: 'Enoch Asare', email: 'enoch@gmail.com', roomType: '1 in a room', roomNumber: '12' },
  { id: '2', name: 'Richard Tagoe', email: 'Richie@gmail.com', roomType: '2 in a room', roomNumber: '6' },
  { id: '3', name: 'Kofi Mintah', email: 'Kofi24@gmail.com', roomType: '2 in a room', roomNumber: '6' },
  { id: '4', name: 'Ama Kakari', email: 'Ama4@gmail.com', roomType: '3 in a room', roomNumber: '4' },
  { id: '5', name: 'Esi Mintah', email: 'EsiM72@gmail.com', roomType: '3 in a room', roomNumber: '10' },
  { id: '6', name: 'Maame Ama', email: 'Masaame@gmail.com', roomType: '4 in a room', roomNumber: '3' },
];

const OccupantsScreen = ({ navigation }) => {
  const renderOccupant = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.name]}>{item.name}</Text>
      <Text style={[styles.cell, styles.email]}>{item.email}</Text>
      <Text style={[styles.cell, styles.roomType]}>{item.roomType}</Text>
      <Text style={[styles.cell, styles.roomNumber]}>{item.roomNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Makassela Hostel</Text>
      </View>
      <Text style={styles.title}>Occupants</Text>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, styles.name]}>Name</Text>
          <Text style={[styles.headerCell, styles.email]}>Email</Text>
          <Text style={[styles.headerCell, styles.roomType]}>Room Capacity</Text>
          <Text style={[styles.headerCell, styles.roomNumber]}>Room No.</Text>
        </View>

        <FlatList
          data={occupants}
          renderItem={renderOccupant}
          keyExtractor={(item) => item.id}
          style={styles.tableBody}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
  },
  headerText: {
    fontSize: 34,
    fontWeight: '800',
    marginLeft: 10,
  },
  title: {
    fontSize: 26,
    color: '#00AEEF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000', 
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#000', 
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  tableBody: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000', 
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#000', 
  },
  name: {
    flex: 2, 
  },
  email: {
    flex: 4, 
  },
  roomType: {
    flex: 1.8,
  },
  roomNumber: {
    flex: 1.5, 
  },
});

export default OccupantsScreen;


