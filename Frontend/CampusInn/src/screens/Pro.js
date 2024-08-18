import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../components/AuthContext";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = () => {
  const { user, isLoading, logout, updateUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [school, setSchool] = useState(user?.school || "");
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);

  useEffect(() => {
    // Update state variables only when user data changes
    if (user) {
      setFullName(user.fullName);
      setSchool(user.school);
      setProfileImage(user.profileImage);
    }
  }, [user]);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSave = async () => {
    try {
      await updateUser({ ...user, fullName, school, profileImage });
      setEditing(false);
    } catch (error) {
      Alert.alert("Error", "Failed to update profile");
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission Required", "You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* Profile Image and Info */}
      <View style={styles.profileRow}>
        <TouchableOpacity onPress={editing ? pickImage : null}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Ionicons name="person-circle" size={80} color="#10b8e8" />
          )}
        </TouchableOpacity>

        <View style={styles.profileInfo}>
          {editing ? (
            <>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
              />
              <TextInput
                style={styles.input}
                value={school}
                onChangeText={setSchool}
                placeholder="School"
              />
            </>
          ) : (
            <>
              <Text style={styles.name}>{fullName}</Text>
              <Text style={styles.school}>{school}</Text>
            </>
          )}
          <TouchableOpacity onPress={editing ? handleSave : handleEditToggle}>
            <View style={styles.editRow}>
              <Text style={styles.editText}>
                {editing ? "Save" : "Edit your account"}
              </Text>
              {editing ? (
                <Ionicons
                  name="checkmark"
                  size={20}
                  color="#10b8e8"
                />
              ) : (
                <Image
                  source={require("../../assets/write.png")}
                  style={styles.editIcon}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dashboard and Transactions */}
      <Text style={styles.dashboardText}>Dashboard</Text>

      <TouchableOpacity
        style={styles.transactionRow}
        onPress={() => navigation.navigate("Transactions")}
      >
        <View style={styles.transactionIconContainer}>
          <Image
            source={require("../../assets/time.png")}
            style={styles.transactionIcon}
          />
        </View>
        <Text style={styles.transactionText}>Transactions</Text>
        <Entypo name="chevron-right" size={20} color="black" />
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
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
    textAlign: 'center',
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
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  school: {
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
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
    marginLeft: 10,
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
  },
});

export default ProfileScreen;
