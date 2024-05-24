import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Home(){

    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: true,
            headerLeft: ()=>(
                <Pressable onPress={()=>navigation.openDrawer()} style={{marginLeft: 20}}>
                    <FontAwesome6 name="bars" size={20} color="black" />
                </Pressable>
            )
        })
    }, [])
    
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})