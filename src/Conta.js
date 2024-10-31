import { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "./Context/AuthContext";


export default function Conta() {

  const [ usuario, setUsuario ] = useState();

  const {user} = useContext( AuthContext );



  return (
    <View style={styles.vie2}>
        <View style={styles.vie3}>
        <Text style={styles.text}>Nome: {user.nomeUsuario}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Endereço: {user.endereco}</Text>
        <Text style={styles.text}>Telefone: {user.telefone}</Text>
        <Text style={styles.text}>Senha: {user.senha}</Text>
        </View>
        <TouchableOpacity style={styles.btn} >
                <Text style={styles.btnText}>Editar</Text>
            </TouchableOpacity>
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
    marginLeft: 10,
    marginTop: 25,
  },
  vie2: {
    marginTop: 120,
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
});