import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image, Alert } from "react-native";

export default function Cadastro({ setCadastro }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    async function Cadastrar() {
        if (senha.trim() !== confirmarSenha.trim()) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }
    
        const dadosCadastro = {
            nomeUsuario: nome.trim(),
            email: email.trim(),
            telefone: telefone.trim(),
            endereco: endereco.trim(),
            senha: senha.trim(),
            confirmarSenha: confirmarSenha.trim() 
        };
    
        try {
            const API_URL = process.env.EXPO_PUBLIC_URL + 'api/Usuario/Cadastro';
    
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosCadastro),
            });
    
            if (response.ok) {
                const data = await response.json();
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                setCadastro(false);
            } else {
                const errorText = await response.text();
                console.log("Texto de erro:", errorText); 
                Alert.alert('Erro', errorText || 'Ocorreu um erro ao cadastrar');
            }
        } catch (error) {
            console.error("Erro ao fazer requisição:", error);
            Alert.alert('Erro', 'Erro de rede ou servidor');
        }
    }
    
    function Voltar() {
        setCadastro(false);
    }

    return (
        <View style={styles.Container}>
            <Image source={require("../assets/logo.png")} style={styles.imagem} />
            <Text style={styles.titulo2}>Cadastro</Text>
            <View style={styles.Caixonainputs}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Nome Completo'
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Email'
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Telefone'
                    keyboardType="numeric"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Endereço'
                    value={endereco}
                    onChangeText={setEndereco}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Senha'
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Confirmar Senha'
                    secureTextEntry
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={Cadastrar}>
                <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Voltar}>
                <Text style={styles.btnText}>Voltar</Text>
            </TouchableOpacity>
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
        marginTop: 10,
    },
    inputs: {
        width: 300,
        height: 50,
        backgroundColor: '#FFFF',
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 17,
        borderRadius: 15,
        marginBottom: 10,
        textAlign: "center",
    },
    btn: {
        width: 300,
        height: 55,
        backgroundColor: '#F5C185',
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 1,
        marginLeft: 7,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 50,
    },
    imagem: {
        width: "25%",
        resizeMode: 'stretch',
        height: 80,
        marginLeft: "3%",
        borderRadius: 20,
    },
    titulo2: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
    },
    Caixonainputs: {
        backgroundColor: '#F89A9A',
        width: '85%',
        borderRadius: 20,
        height: 460,
        borderWidth: 1,
        marginLeft: 7,
    },
});
