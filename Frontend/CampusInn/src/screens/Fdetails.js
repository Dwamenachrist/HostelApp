import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  // Import Expo vector icons

const Fdetails = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.backArrow} />
      </TouchableOpacity>

    
      <View style={styles.imageGrid}>
        <Image source={require('../assets/L.png')} style={styles.image} />
        <Image source={require('../assets/L.png')} style={styles.image} />
        <Image source={require('../assets/L.png')} style={styles.image} />
        <Image source={require('../assets/L.png')} style={styles.image} />
        <Image source={require('../assets/L.png')} style={styles.image} />
      </View>

      
      <View style={styles.titleRow}>
        <Text style={styles.title}>LIBRARY</Text>
        <View style={styles.rating}>
          <AntDesign name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>4</Text>
        </View>
      </View>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        Need a quiet space to study, catch up on reading, or simply unwind? Our hostel library is your haven. Snuggle up in a comfy armchair with a good book, or spread out at a spacious desk to tackle that essay. We've got everything you need to make studying a breeze, including:
      </Text>
      <Text style={styles.listItem}>• Free Wi-Fi: Stay connected and get your research done.</Text>
      <Text style={styles.listItem}>• Plenty of natural light: Perfect for those long study sessions.</Text>
      <Text style={styles.listItem}>• A curated selection of books: From classic novels to textbooks, we've got something for everyone.</Text>
      <Text style={styles.listItem}>• A relaxing atmosphere: Escape the hustle and bustle and find your focus.</Text>
      <Text style={styles.descriptionText}>Come discover your new favorite study spot!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backArrow: {
    marginBottom: 16,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  image: {
    width: '32%',
    height: 100,
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 18,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Fdetails;

