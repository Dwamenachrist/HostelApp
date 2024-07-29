import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

// Import local images
const sampleImage = require("../assets/makassela.png");

const HostelBookingInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const sampleData = {
    name: "MB3 Hostel",
    roomType: "1 in a room",
    oldPrice: 20000,
    newPrice: 10000,
    photos: [
      { image: sampleImage },
      { image: sampleImage },
      { image: sampleImage },
      { image: sampleImage },
      { image: sampleImage },
    ],
    rating: 4,
    availableRooms: 10,
    rooms: [
      { name: "Single Room" },
      { name: "Double Room" },
    ],
  };

  const {
    name = "Hotel Name",
    roomType = "Room Type",
    oldPrice = 0,
    newPrice = 0,
    photos = [],
    rating = 0,
    availableRooms = 0,
    rooms = [],
  } = sampleData;

  const {
    adults = 1,
    children = 0,
    selectedDates = { startDate: "N/A", endDate: "N/A" },
  } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [name, navigation]);

  const handleBooking = () => {
    navigation.navigate("handleBooking", {
      name,
      rating,
      checkIn: selectedDates.startDate,
      checkOut: selectedDates.endDate,
      roomType: rooms[0]?.name || "N/A",
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
        <ScrollView>
          <View style={styles.imageGallery}>
            {photos.slice(0, 5).map((photo, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image style={styles.image} source={photo.image} />
              </View>
            ))}
            <Pressable style={styles.showMoreButton}>
              <Text style={styles.showMoreText}>Show more</Text>
            </Pressable>
          </View>

          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>{name}</Text>
            <View style={styles.ratingWrapper}>
              <MaterialIcons name="star" size={24} color="gold" />
              <Text>{rating}</Text>
            </View>
          </View>
          <Text style={styles.roomType}>room type: {roomType}</Text>

          <View style={styles.separator} />
          <View style={styles.priceAndRooms}>
            <View style={styles.priceInfo}>
              <Text style={styles.priceLabel}>Price for One Semester</Text>
              <Text style={styles.price}>GHc {newPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.lineSection}>
          <View style={styles.line} ></View>
          <View style={styles.line} ></View> 
          </View>
            <View style={styles.availableRooms}>
              <Text style={styles.availableRoomsLabel}>Available Rooms</Text>
              <Text style={styles.availableRoomsCount}>{availableRooms}</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.stayDetails}>
            <View>
              <Text style={styles.detailLabel}>Check In</Text>
              <Text style={styles.detailValue}>{selectedDates.startDate}</Text>
            </View>
            <View>
              <Text style={styles.detailLabel}>Check Out</Text>
              <Text style={styles.detailValue}>{selectedDates.endDate}</Text>
            </View>
          </View>
          <View style={styles.stayDetails}>
            <Text style={styles.detailLabel}>Room and guests</Text>
            <Text style={styles.detailValue}>
              1 room, {adults} student{children > 0 ? `, ${children} children` : ''}
            </Text>
          </View>

          <View style={styles.separator} />
          <Text style={styles.facilitiesTitle}>Most Popular Facilities</Text>
          <View style={styles.facilities}>
            <Text style={styles.facility}>Study room</Text>
            <Text style={styles.facility}>canteen</Text>
            <Text style={styles.facility}>library</Text>
            <Text style={styles.facility}>shuttles</Text>
          </View>
        </ScrollView>

      <Button
        mode="contained"
        onPress={(handleBooking) => navigation.navigate('SummaryScreen')}
        style={styles.footerButton}
      >
        Book
      </Button>
    </>
  );
};

export default HostelBookingInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  header: {
    height: 110,
    borderBottomColor: "transparent",
    shadowColor: "transparent",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  imageGallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    justifyContent: "space-between",
  },
  imageWrapper: {
    flexBasis: "48%",
    marginVertical: 6,
  },
  image: {
    width: 140,
    height: 90,
    borderRadius: 4,
  },
  showMoreButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  },
  showMoreText: {
    textAlign: "center",
    color: "#007FFF",
  },
  hotelInfo: {
    marginHorizontal: 12,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hotelName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  roomType: {
    fontSize: 18,
    color: "#666",
    marginHorizontal: 12,
    marginTop: 5,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  priceAndRooms: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },
  verticalLine: {
    width: 2, 
    height: '100%', 
    backgroundColor: '#dfdada', 
    marginRight: 10, 
  },
  priceInfo: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  availableRooms: {
    flex: 1,
    alignItems: "flex-end",
  },
  availableRoomsLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  availableRoomsCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  stayDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007FFF",
  },
  facilitiesTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 12,
    marginBottom: 10,
  },
  facilities: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 12,
    marginBottom: 20,
  },
  facility: {
    backgroundColor: "#007FFF",
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  footerButton: {
    backgroundColor: "#007FFF",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
  },
  footerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});