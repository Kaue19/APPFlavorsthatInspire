import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native"

export default function Cadastro({ setLogado, setCadastro }) {

    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }
    return (
        <View style={styles.Container}>
            <Image source={require("../assets/logo.png")} style={styles.imagem} />
            <Text style={styles.titulo2}>Cadastro</Text>
            <View  style={styles.Caixonainputs}>
            <TextInput style={styles.inputs} placeholder='Nome Completo' />
            <TextInput style={styles.inputs} placeholder='Email' />
            <TextInput style={styles.inputs} placeholder='Telefone' />
            <TextInput style={styles.inputs} placeholder='Endereço' />
            <TextInput style={styles.inputs} placeholder='Senha' />
            <TextInput style={styles.inputs} placeholder='Confirmar Senha' />
            </View>
            <TouchableOpacity style={styles.btn} onPress={Cadastrar}>
                <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Voltar}>
                <Text style={styles.btnText}>Voltar</Text>
            </TouchableOpacity>
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
        marginTop: 50,
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
        borderRadius: 20
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
