import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const reviews = [
  {
    id: '1',
    title: 'The rooms were comfortable',
    time: '1y ago',
    rating: 5,
    description: 'The moment I stepped inside, the hostel room felt less like a shared space and more like a haven. The soft glow of the bedside lamp, the worn but comfortable armchair inviting me to curl up with a book, and the faint scent of lavender from the linen – it was a welcome respite from the day\'s adventures.',
  },
  {
    id: '2',
    title: 'The facilities helped me study',
    time: '2months ago',
    rating: 5,
    description: 'The quiet hum of the communal study room, the soft glow of the lamps, and the stacks of books lining the shelves – this hostel was a haven for a student like me, a place where studying felt less like a chore and more like a sanctuary.',
  },
];

const ReviewScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.reviewBox}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewTitle}>{item.title}</Text>
        <Text style={styles.reviewTime}>{item.time}</Text>
      </View>
      <View style={styles.reviewRating}>
        {[...Array(item.rating)].map((_, index) => (
          <FontAwesome key={index} name="star" size={16} color="gold" />
        ))}
      </View>
      <Text style={styles.reviewDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>REVIEWS</Text>
      </View>

      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>4.9 {"\n"}<Text style={styles.rateText2}>out of 5</Text></Text>
        <View style={styles.starsColumn}>
          {[5, 4, 3, 2, 1].map((star, index) => (
            <View key={index} style={styles.starRow}>
              <FontAwesome name="star" size={14} color="gold" />
              <Text>{star}</Text>
              <View style={[styles.ratingBar, { width: `${star * 20}%` }]} />
            </View>
          ))}
        </View>
      </View>

      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.reviewList}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="write a review"
        />
        <TouchableOpacity style={styles.submitButton}>
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  ratingRow: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  starsColumn: {
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingBar: {
    height: 10,
    backgroundColor: 'gold',
    marginLeft: 10,
  },
  reviewList: {
    paddingBottom: 80,
  },
  reviewBox: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewTime: {
    fontSize: 14,
    color: 'gray',
  },
  reviewRating: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  reviewDescription: {
    fontSize: 14,
    color: 'gray',
  },
  inputRow: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
  },
  submitButton: {
    marginLeft: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 25,
    padding: 10,
  },
});

export default ReviewScreen;

