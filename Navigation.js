import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabGroup = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false
        })}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Ionicons name="home" size={24} color="black" />
                    ) : (
                        <Ionicons name="home-outline" size={24} color="black" />
                    ),
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) => focused?(
                    <FontAwesome name="user-circle-o" size={24} color="black" />
                ):(
                    <FontAwesome5 name="user-circle" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}