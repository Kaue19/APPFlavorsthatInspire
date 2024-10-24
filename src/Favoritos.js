import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Reclamacoes() {
  return (
    <View style={styles.vie2}>
      <View style={styles.addimage}><Text style={styles.text} >Adicionar Imagem+</Text></View>
      <TextInput style={styles.input} placeholder='Digite sua Reclamação' />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 55,
    fontSize: 15,
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    marginTop: '5%',
    marginBottom: 5,
    marginLeft: 18
  },
  btn: {
    width: '90%',
    height: 55,
    backgroundColor: '#DB7861',
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 1,
    marginLeft: 18
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },
  vie2: {
    marginTop: -50
  },
  addimage: {
   borderWidth: 1,
   marginTop: 280,
   height:40,
   width: 200,
   marginLeft: 100,
   borderRadius: 15
  },
});