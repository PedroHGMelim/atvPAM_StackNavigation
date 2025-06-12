import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { saveLogin, savedLogin } from '../components/SaveLogin';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(() => {
        savedLogin(navigation);
      }, []);

    const login = () => {
        if (password === "Admin" && user === "Admin"){
            saveLogin(user, password);
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my Stack Navigation App</Text>
            <TextInput style={styles.input} 
            keyboardType='default' 
            value={user} 
            onChangeText={setUser}
            placeholder="User" />
            
            <TextInput style={styles.input} 
            keyboardType='default' 
            value={password} 
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="password" />

            <View style={styles.buttonContainer}>
                <Button
                title="Login"
                onPress={login}
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
        backgroundColor: '#f2fae6', //cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        
    },
    buttonContainer: {
        backgroundColor: '#c4dea6', //cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela
        borderRadius: 5,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#f3f5f2', //cor de fundo dos inputs
        width: windowWidth * 0.75, //75% da largura da tela
        margin: 15,
        justifyContent: 'center',
    }
});