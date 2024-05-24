import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import data from "../data";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Profile(){

    const navigation = useNavigation()

    const user = data?.user

    useLayoutEffect(()=>{
        navigation.setOptions({
        })
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={{justifyContent: 'center', paddingTop: 70, alignItems:'center'}}>
                    <Image source={user?.image} style={{height: 150, width: 150, borderRadius: 100, marginBottom: 15}}/>
                    <Text style={styles.text}>Followers: {user?.followersCount}</Text>
                    <Text style={styles.text}>Following: {user?.followingCount}</Text>
                    <View style={{flexDirection: 'row', gap: 5, marginTop: 10}}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: 'white', fontWeight: '500'}}>Share Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: 'white', fontWeight: '500'}}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: '500'
    },
    button: {
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgb(160, 160, 160)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})