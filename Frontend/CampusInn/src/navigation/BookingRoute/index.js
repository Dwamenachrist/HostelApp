import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Hdetails from "../../screens/Hdetails";
import RoomTypesScreen from "../../screens/RoomCapacity";
import RoomScreen from "../../screens/Rooms";
import HostelInfo from "../../screens/HostelInfoScreen";
import ReviewScreen from "../../screens/Reviews";
import Facilities from "../../screens/Facilities";
import Fdetails from "../../screens/Fdetails";
import HostelBookingInfo from "../../screens/Booking Info";
import Summary from "../../screens/SummaryScreen";
import Payment from "../../screens/PaymentScreen";
import Congrat from "../../screens/Congratulation";


const BookingStack = createNativeStackNavigator();

const BookingStackRoute = ()=> {
    return (
        <BookingStack.Navigator screenOptions={{headerShown: false}}>
            <BookingStack.Screen name="Hdetails" component={Hdetails} />
            <BookingStack.Screen name="RoomCapacity" component={RoomTypesScreen} />
            <BookingStack.Screen name="Rooms" component={RoomScreen} />
            {/* <BookingStack.Screen name="HostelBookingInfo" component={HostelInfo} /> */}
            <BookingStack.Screen name="Reviews" component={ReviewScreen} />
            <BookingStack.Screen name="Facilities" component={Facilities} />
            <BookingStack.Screen name="Fdetails" component={Fdetails} />
            <BookingStack.Screen name="HostelBookingInfo" component={HostelBookingInfo} />
            <BookingStack.Screen name="Summary" component={Summary} />
            <BookingStack.Screen name="Payment" component={Payment} />
            <BookingStack.Screen name="Congrat" component={Congrat} />
        </BookingStack.Navigator>
    )
}

export default BookingStackRoute;