import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Keyboard, StyleSheet, Image } from 'react-native'



export default function login({ setLogado, setCadastro }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Login() {
        Keyboard.dismiss();
        if (email == "kk@k" && senha == "321") {
            setLogado(true);
        }
    }

    function Cadastrar() {
        setLogado(true);
        setCadastro(true);
    }

    return (
        <View style={styles.Container}>
            <Image source={require("../assets/logo.png")} style={styles.imagem} />
            <Text style={styles.titulo2}>LOGIN</Text>
            <View style={styles.Caixonainputs}>
            <TextInput style={styles.inputs} onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                placeholder='Email Ou Telefone' />
            <TextInput style={styles.inputs}  onChangeText={(digitado) => setSenha(digitado)}
                value={senha}
                placeholder='Senha' />
                </View>
            <TouchableOpacity style={styles.btn} onPress={Login}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Cadastrar}>
                <Text style={styles.btnText}>Cadastre-se</Text>
            </TouchableOpacity>
            <Image source={require("../assets/Pizzaburgerbebida.jpg")} style={styles.imagem2} />
        </View>
    )
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
        marginTop: 25,
        marginLeft: 15,
        borderRadius: 15,
        marginBottom: 15,
        textAlign: "center",
    },
    btn: {
        width: 300,
        height: 55,
        backgroundColor: '#F5C185',
        borderRadius: 15,
        marginTop: 15,
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
        marginBottom: 15,
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
        height: 200,
        borderWidth: 1,
        marginLeft: 10,
    },
});
