import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet, View, Image} from "react-native";

export default function Message({message, image}){

    const navigation = useNavigation()

    return(
        <TouchableOpacity onPress={()=>navigation.navigate('messageDetail', {message: message})}>
            <View style={styles.messageContainer}>
                <View style={{width: "fit-content"}}>
                    <Image source={image} style={styles.image}/>
                </View>
                <View style={{ width: '85%'}}>
                    <View style={styles.messageInfo}>
                        <Text style={styles.sender}>{message?.sender}</Text>
                        <Text style={styles.time}>{message?.time}</Text>
                    </View>
                    <Text style={styles.message}>{message?.message}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sender: {
        fontSize: 17,
        fontWeight: '500',
    },
    message: {
        fontSize: 14,
        fontWeight: '400'
    },
    time: {
        fontSize: 13,
        color: 'grey',
    },
    image: {
        height: 55,
        width: 55,
        borderRadius: 100  
    },
    messageContainer: {
        height: 'fit-content',
        width: '95%',
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: 'start',
        gap: 7
    },
    messageInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3
    }
})