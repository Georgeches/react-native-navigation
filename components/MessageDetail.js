import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function MessageDetail({route}){

    const navigation = useNavigation()
    const { message } = route.params

    return(
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                    <Pressable onPress={()=>navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image source={message?.image} style={styles.image}/>
                        <Text style={{fontSize: 18, fontWeight: '500'}}>{message?.sender}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <Entypo name="phone" size={24} color="black" />
                    <FontAwesome name="video-camera" size={24} color="black" />
                </View>
            </View>
            <View style={styles.body}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 100  
    },
})