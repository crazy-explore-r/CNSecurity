import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react'

const Body = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.imgcontainer}>
                <Image
                    source={{
                        uri: "https://codenet.dev/wp-content/uploads/2024/01/CodeNet-Logo.png"
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Login</Text>
                <View>
                    <TextInput placeholder='Email' />
                    <TextInput placeholder='Password' secureTextEntry />
                </View>
                <Button title='Login' />
            </View>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgcontainer: {
        alignItems: "center",
        marginTop: 100,
    },
    image: {
        width: 200,
        height: 30,
    },
    body: {
        alignItems: "center",
        marginTop: 50,
    },
    title: {
        fontSize: 25,
        fontFamily: "rocker"
    }
});