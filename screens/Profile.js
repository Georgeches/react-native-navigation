import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Profile(){

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Profile Screen</Text>
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