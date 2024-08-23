import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../../screens/splash"
import HomeScreen from "../../screens/HomeScreen1"
import Home from "../../screens/HomeScreen"
import StudentWelcomeScreen from "../../screens/Student WelcomeScreen"
import StudentSignIn from "../../screens/Student SignIn"
import StudentSignUp from "../../screens/Student SignUp"
import ResetPassword from "../../screens/ResetPasswordScreen"
import ManagerWelcomeScreen from "../../screens/Manager WelcomeScreen"
import ManagerSignIn from "../../screens/Manager SignIn"
import ManagerUpload from "../../screens/Manager Upload"
import UploadHostelScreen from "../../screens/UploadHostelForm"
import UploadRoom from "../../screens/UploadRoom"
import UploadRoomScreen from "../../screens/UploadRoomForm"
import Manage from "../../screens/ManageScreen"
import ViewScreen from "../../screens/View"
import Congrat from "../../screens/Congratulation"
import Hdetails from "../../screens/Hdetails"
import UploadHdetails from "../../screens/UploadHdetails"
import BackCongratulation from "../../screens/BackToHome"
import HostelInfo from "../../screens/HostelInfoScreen"
import Payment from "../../screens/PaymentScreen"
import Summary from "../../screens/SummaryScreen"
import OccupantsScreen from "../../screens/Occupants"
import ReviewScreen from "../../screens/Reviews"
import RoomScreen from "../../screens/Rooms"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
    return  (
<Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={Splash} />
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="StudentWelcomeScreen" component={StudentWelcomeScreen} />
                <Stack.Screen name="StudentSignIn" component={StudentSignIn} />
                <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
                <Stack.Screen name="ResetPasswordScreen" component={ResetPassword} />
                <Stack.Screen name="ManagerWelcomeScreen" component={ManagerWelcomeScreen} />
                <Stack.Screen name="ManagerSignIn" component={ManagerSignIn} />
                <Stack.Screen name="ManagerUpload" component={ManagerUpload} />
                <Stack.Screen name="UploadHostelScreen" component={UploadHostelScreen}/>
                <Stack.Screen name="UploadRoom" component={UploadRoom}/>
                <Stack.Screen name="UploadRoomScreen" component={UploadRoomScreen }/>
                <Stack.Screen name="Manage" component={Manage }/>
                <Stack.Screen name="View" component={ViewScreen }/>
                <Stack.Screen name="Congrat" component={Congrat }/>
                <Stack.Screen name="Hdetails" component={Hdetails }/>
                <Stack.Screen name="UploadHdetails" component={UploadHdetails }/>
                <Stack.Screen name="BackCongratulation" component={BackCongratulation }/>
                <Stack.Screen name="HostelInfo" component={HostelInfo }/>
                <Stack.Screen name="Payment" component={Payment }/>
                <Stack.Screen name="Summary" component={Summary}/>
                <Stack.Screen name="Occupants" component={OccupantsScreen}/>
                <Stack.Screen name="Reviews" component={ReviewScreen}/>
                <Stack.Screen name="Rooms" component={RoomScreen}/>
            </Stack.Navigator>
    )
}
