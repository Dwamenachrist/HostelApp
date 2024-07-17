import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons,Entypo } from '@expo/vector-icons';


const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileRow}>
        <Ionicons name="person-circle" size={80} color="#10b8e8" />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Enoch Owusu Asare</Text>
          <Text style={styles.school}>University of Ghana student</Text>
          <View style={styles.editRow}>
            <Text style={styles.editText}>Edit your account</Text>
            <Image source={require('../../assets/write.png')} style={styles.editIcon} />
          </View>
        </View>
      </View>

      <Text style={styles.dashboardText}>Dashboard</Text>

      <TouchableOpacity style={styles.transactionRow} onPress={() => navigation.navigate('Transactions')}>
        <View style={styles.transactionIconContainer}>
          <Image source={require('../../assets/time.png')} style={styles.transactionIcon} />
        </View>
        <Text style={styles.transactionText}>Transactions</Text>
        <Entypo name="chevron-right" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => {/* Handle logout logic */}}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    paddingHorizontal: 130,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  profileInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  school: {
    color: 'gray',
    marginBottom: 5,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    color: '#10b8e8',
  },
  editIcon: {
    width: 20,
    height: 20,
    marginLeft: 120,
  },
  dashboardText: {
    color: 'gray',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  transactionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  transactionIcon: {
    width: 20,
    height: 20,
  },
  transactionText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
 
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  logoutText: {
    color: '#10b8e8',
    marginTop: -150,
  },
});

export default ProfileScreen;
