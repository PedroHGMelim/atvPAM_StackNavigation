import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                title="Exit"
                onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6', //cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#e6d1ad', //cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela
        borderRadius: 5,
    },
});