import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Messages from "./screens/Messages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageDetail from "./components/MessageDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "./screens/Settings";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FollowersScreen from "./screens/Followers";
import FollowingScreen from "./screens/Following";

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const TopTab = createMaterialTopTabNavigator()

const MessagesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={Messages}/>
            <Stack.Screen name="messageDetail" component={MessageDetail} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const ProfileTopTabGroup = () => {
    return(
        <TopTab.Navigator>
            <TopTab.Screen name='main' component={Profile} options={{title: 'Profile'}}/>
            <TopTab.Screen name="Followers" component={FollowersScreen}/>
            <TopTab.Screen name="Following" component={FollowingScreen}/>
        </TopTab.Navigator>
    )
}

const HomeTabGroup = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
        })}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Ionicons name="home" size={24} color="black" />
                    ) : (
                        <Ionicons name="home-outline" size={24} color="black" />
                    ),
            }}/>
            <Tab.Screen name="MessagesStack" component={MessagesStack} options={{
                tabBarStyle: {display: 'none'},
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <MaterialCommunityIcons name="message" size={24} color="black" />
                    ) : (
                        <Feather name="message-square" size={24} color="black" />
                    ),
                headerShown: false
            }}/>
            <Tab.Screen name="Profile" component={ProfileTopTabGroup} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => focused?(
                    <FontAwesome name="user-circle-o" size={24} color="black" />
                ):(
                    <FontAwesome5 name="user-circle" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    )
}

const DrawerGroup = () => {
    return(
        <Drawer.Navigator screenOptions={{
            drawerLabelStyle: {
                color: 'black'
            }
        }}>
            <Drawer.Screen name="HomeTabGroup" component={HomeTabGroup} options={{headerShown: false, title: 'Home'}}/>
            <Drawer.Screen name="Settings" component={Settings}/>
        </Drawer.Navigator>
    )
}

export default function Navigation(){
    
    return (
        <NavigationContainer>
            <DrawerGroup/>
        </NavigationContainer>
    )
}