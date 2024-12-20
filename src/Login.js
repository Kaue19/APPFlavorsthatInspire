import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from './Context/AuthContext';
import Cadastro from "./Cadastro";

export default function login({ setCadastro }) {
    const { Login, error } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        if (error) {
            setErrorMessage("E-MAIL OU SENHA INCORRETOS!");
        }
    }, [error]);

    const handleLogin = () => {
        setErrorMessage("");
        Login(email, senha);
    }

    return (
        <View style={styles.Container}>
            <Image source={require("../assets/logo.png")} style={styles.imagem} />
            <Text style={styles.titulo2}>LOGIN</Text>
            <View style={styles.Caixonainputs}>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(digitado) => setEmail(digitado)}
                    value={email}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha}
                    placeholder='Senha'
                    secureTextEntry
                />
                <Text style={styles.esqueceuasenha}>Esqueceu a Senha?</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={setCadastro}>
                <Text style={styles.btnText}>Cadastre-se</Text>
            </TouchableOpacity>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <Image source={require("../assets/Pizzaburgerbebida.jpg")} style={styles.imagem2} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 50
    },
    inputs: {
        width: 300,
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 15,
        marginBottom: 10,
        textAlign: "center",
    },
    esqueceuasenha: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },
    btn: {
        width: 300,
        height: 55,
        backgroundColor: '#F5C185',
        borderRadius: 15,
        marginTop: 50,
        borderWidth: 1,
        marginLeft: 10,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 50,
    },
    imagem: {
        width: "30%",
        resizeMode: 'stretch',
        height: 100,
        marginLeft: "2%",
        borderRadius: 20,
        marginBottom: 20,
    },
    titulo2: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    imagem2: {
        width: "60%",
        resizeMode: 'stretch',
        height: 200,
        marginLeft: "5%",
        borderRadius: 20
    },
    Caixonainputs: {
        backgroundColor: '#F89A9A',
        width: '85%',
        borderRadius: 20,
        height: 170,
        borderWidth: 1,
        marginLeft: 10,
        marginTop: -10
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    }
});
