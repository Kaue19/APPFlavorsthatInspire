import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "./Context/AuthContext";


export default function Conta() {

    const { user, setUser } = useContext(AuthContext);

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [endereco, setEndereco] = useState();
    const [telefone, setTelefone] = useState();
    const [senha, setSenha] = useState();

    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (user) {
            setNome(user.nomeUsuario);
            setEmail(user.email);
            setEndereco(user.endereco);
            setTelefone(user.telefone);
            setSenha(user.senha);
        }
    }, [user]);


    async function editar() {

        await fetch(process.env.EXPO_PUBLIC_URL + 'api/Usuario/UpdateUsuario/' + user.usuarioId, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nomeUsuario: nome,
                email: email,
                endereco: endereco,
                senha: senha,
                confirmarSenha: senha,
                telefone: telefone
            })
        })
            .then(res => res.json())
            .then(json => {
                setEdit(true);
                setUser(json);
            })
            .catch(err => setError(true))
    }

    return (
        <View style={styles.vie2}>
            <View style={styles.vie3}>
                <TextInput style={styles.text}
                    value={nome}
                    onChangeText={(value) => setNome(value)}
                />
                <TextInput style={styles.text}
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput style={styles.text}
                    value={endereco}
                    onChangeText={(value) => setEndereco(value)}
                />
                <TextInput style={styles.text}
                    value={telefone}
                    onChangeText={(value) => setTelefone(value)}
                />
                <TextInput style={styles.text}
                    value={senha}
                    onChangeText={(value) => setSenha(value)}
                />

            </View>
            <TouchableOpacity style={styles.btn} onPress={() => editar()}>
                <Text style={styles.btnText}>Editar</Text>
            </TouchableOpacity>
            {edit == true && <Text style={styles.aviso}>Informações Atualizadas com Sucesso!!</Text>}
            {error && <Text style={styles.avisoerro}>Erro, não foi possível atualizar as informações</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '90%',
        height: 55,
        backgroundColor: '#F5C185',
        borderRadius: 15,
        marginTop: '3%',
        borderWidth: 1,
        marginLeft: 18
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'left',
        marginLeft: '5%',
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center'
    },
    vie2: {
        marginTop: 60,
        backgroundColor: "#F89A9A",
        width: 350,
        height: 400,
        marginLeft: 20,
        borderRadius: 20,
        borderWidth: 1,
    },
    vie3: {
        marginTop: 20,
        backgroundColor: "#E2DFDF",
        width: 300,
        height: 300,
        marginLeft: 25,
        borderRadius: 20,
        borderWidth: 1,
    },
    aviso: {
        marginTop: 30,
        textAlign: 'center',
        color: '#fca030',
        fontSize: 20
    },
    avisoerro: {
        marginTop: 70,
        textAlign: 'center',
        color: '#ff0808',
        fontSize: 20
    }
});