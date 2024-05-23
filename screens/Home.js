import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Home(){
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