import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from "react-native";
import { AuthContext } from "./Context/AuthContext"
import { useContext } from "react"



export default function Favoritos() {

  const  {Favoritar, Desfavoritar} = useContext( AuthContext );


  return (
    <FlatList
        data={Favoritar}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image style={styles.imagem} source={{ uri: item.produtoFoto }} />
            <View style={styles.caixanomepreco}>
            <Text style={styles.nome}>{item.produtoNome}</Text>
            <TouchableOpacity onPress={() => Desfavoritar(item.produtoId)} style={styles.caixaremover}>
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.produtoId}
      />
  )
}

const styles = StyleSheet.create({
  imagem: {
    width: '30%',
    height: 100,
    borderRadius: 20,
    marginLeft: '5%',
    marginTop: '10%',
    marginBottom: 90,
  },
  btnText: {
    textAlign: 'center',
  },
  btn:{
    backgroundColor: "#E68F50",
    height: 30,
    width: 175,
    marginLeft: '29%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
   
  },
  cartItem: {
    flexDirection: 'row',
    display: 'flex',
    width: '80%'
  },
  caixanomepreco:{
    marginLeft: 10,
    marginTop: '10%',
    marginBottom: 5,
    marginRight: 30,
  },
  nome:{
    fontSize: 25,
  },
  preco:{
    fontSize: 25,
  },
  caixaremover:{
    marginTop: 10,
    width: 25,
    height: 25,
    backgroundColor: '#FF8B8B',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 40,
    borderRadius: 40,
    borderWidth: 1,
  },
});