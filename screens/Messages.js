import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import data from '../data'
import Message from "../components/Message";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Messages(){

    const navigation = useNavigation()

    const [messages, setMessages] = useState(data?.messages);
    const [search, setSearch] = useState('');

    const searchResults = messages.filter(message=>message?.sender?.toLowerCase().includes(search?.toLowerCase()))

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={setSearch}
            />
            <View>
                {searchResults?.map(message=><Message message={message} key={message?.message} image={message?.image}/>)}
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    input: {
        width: '95%',
        height: 45,
        paddingLeft: 20,
        borderRadius: 50,
        backgroundColor: 'rgb(193,193,193)',
        marginBottom: 25
    }
})