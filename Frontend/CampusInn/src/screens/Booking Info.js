import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

const sampleImage = require("../assets/makassela.png");

const HostelBookingInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    room = "N/A",
    roomId = "N/A",
    ac = "N/A",
    status = "N/A",
    price = 0, // Default to 0 if price is undefined
    image = sampleImage,
    hostel = "Hotel Name",
    rating = 0,
    availableRooms = 0,
  } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleBooking = () => {
    if (status !== 'Available') {
      alert("This room is not currently available for booking.");
      return;
    }

    const totalPrice = price * 1;

    navigation.navigate("Summary", {
      hostel,
      room,
      roomId,
      price: totalPrice,
      checkIn: route.params?.selectedDates?.startDate || "N/A",
      checkOut: route.params?.selectedDates?.endDate || "N/A",
      rating,
      availableRooms,
      image,
    });
  };

  return (
      <>
        <SafeAreaView style={styles.container} />
        <ScrollView>
          <View style={styles.imageGallery}>
            {Array.from({ length: 4 }).map((_, index) => (
                <View key={index} style={styles.imageWrapper}>
                  <Image
                      style={styles.image}
                      source={image || sampleImage}
                  />
                </View>
            ))}
            <Pressable style={styles.showMoreButton}>
              <Text style={styles.showMoreText}>Show more</Text>
            </Pressable>
          </View>

          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>{hostel}</Text>
            <View style={styles.ratingWrapper}>
              <MaterialIcons name="star" size={24} color="gold" />
              <Text>{rating}</Text>
            </View>
          </View>
          <Text style={styles.roomType}>Room type: {room}</Text>

          <View style={styles.separator} />
          <View style={styles.priceAndRooms}>
            <View style={styles.priceInfo}>
              <Text style={styles.priceLabel}>Price for One Semester</Text>
              <Text style={styles.price}>GHc {price.toFixed(2)}</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.availableRooms}>
              <Text style={styles.availableRoomsLabel}>Available Rooms</Text>
              <Text style={styles.availableRoomsCount}>{availableRooms}</Text>
            </View>
          </View>

          <View style={styles.separator} />

          {/* Display the new room details */}
          <View style={styles.stayDetails}>
            <View>
              <Text style={styles.detailLabel}>Room ID</Text>
              <Text style={styles.detailValue}>{roomId}</Text>
            </View>
            <View>
              <Text style={styles.detailLabel}>AC</Text>
              <Text style={styles.detailValue}>{ac}</Text>
            </View>
            <View>
              <Text style={styles.detailLabel}>Status</Text>
              <Text style={styles.detailValue}>{status}</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.stayDetails}>
            <View>
              <Text style={styles.detailLabel}>Check In</Text>
              <Text style={styles.detailValue}>
                {route.params?.selectedDates?.startDate || "N/A"}
              </Text>
            </View>
            <View>
              <Text style={styles.detailLabel}>Check Out</Text>
              <Text style={styles.detailValue}>
                {route.params?.selectedDates?.endDate || "N/A"}
              </Text>
            </View>
          </View>
          <View style={styles.stayDetails}>
            <Text style={styles.detailLabel}>Room and guests</Text>
            <Text style={styles.detailValue}>
              1 room, {route.params?.adults || 1} student
              {route.params?.children > 0
                  ? `, ${route.params.children} children`
                  : ""}
            </Text>
          </View>

          <View style={styles.separator} />
          <Text style={styles.facilitiesTitle}>Most Popular Facilities</Text>
          <View style={styles.facilities}>
            <Text style={styles.facility}>Study room</Text>
            <Text style={styles.facility}>Canteen</Text>
            <Text style={styles.facility}>Library</Text>
            <Text style={styles.facility}>Shuttles</Text>
          </View>
        </ScrollView>

        <TouchableOpacity mode="contained" onPress={handleBooking} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Book</Text>
        </TouchableOpacity>
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
    color: "#10b8e8",
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
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  roomType: {
    fontSize: 18,
    color: "#666",
    marginHorizontal: 12,
    marginTop: 5,
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
  verticalLine: {
    width: 2,
    height: "100%",
    backgroundColor: "#dfdada",
    marginRight: 10,
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
    color: "#10b8e8",
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
    backgroundColor: "#10b8e8",
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  footerButton: {
    backgroundColor: "#10b8e8",
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
