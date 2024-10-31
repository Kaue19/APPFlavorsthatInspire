import { useContext } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from "react-native"
import { AuthContext } from "./Context/AuthContext"

 export default function Carrinho({setdetalhesdopedido}){

  const  {carrinho, setCarrinho} = useContext( AuthContext );

  const removerDoCarrinho = (productId) => {
    // Filtra o array de produtos, removendo o item com o ID correspondente
    const novoCarrinho = carrinho.filter((item) => item.id !== productId);
    setCarrinho(novoCarrinho);
  };

    return(
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => setdetalhesdopedido( false )}>
                 <Text style={styles.btnText} >FECHAR</Text>
            </TouchableOpacity>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image style={styles.imagem} source={{ uri: item.produtoFoto }} />
            <View style={styles.caixanomepreco}>
            <Text style={styles.nome}>{item.produtoNome}</Text>
            <Text style={styles.preco}>R$: {item.produtoPreco}</Text>
            </View>
            <TouchableOpacity onPress={() => removerDoCarrinho(item.id)}>
            <Text>Remover</Text>
          </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.produtoId}
      />
        </View>
        
    )
}
const styles = StyleSheet.create({
    imagem: {
        width: '30%',
        height: 100,
        borderRadius: 20,
        marginLeft: '5%',
        marginTop: '5%',
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
      },
      caixanomepreco:{
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 90,
      },
      nome:{
        fontSize: 25,
      },
      preco:{
        fontSize: 25,
      },
})