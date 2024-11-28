import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native"
export default function Detalhe({ item, setDetalhe }) {
  return (
    <View>
      <Image style={styles.imagem} source={{ uri: item.produtoFoto }} />
      <View >
        <Text style={styles.text}>{item.produtoNome}</Text>
        <Text style={styles.textdesc}>{item.produtoDescricao}</Text>
        <Text style={styles.text}>R$: {item.produtoPreco}</Text>
        <Text style={styles.text}>DESCONTO - R$: {item.produtoDesconto}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => { setDetalhe(false); setDetalhe(false) }}>
        <Text style={styles.btnText} onPress={() => { setDetalhe(false); setDetalhe(false) }}>FECHAR</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  imagem: {
    width: '70%',
    height: 200,
    borderRadius: 20,
    marginLeft: '15%',
    marginTop: '5%'
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10
  },
  textdesc: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  },
  btnText: {
    textAlign: 'center',
  },
  btn: {
    backgroundColor: "#E68F50",
    height: 30,
    width: 135,
    marginLeft: '35%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  },
})