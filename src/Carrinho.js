import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { AuthContext } from "./Context/AuthContext";

export default function Carrinho({ setdetalhesdopedido }) {
  const { carrinho, removerDoCarrinho, atualizarQuantidade } = useContext(AuthContext);

  const calcularTotal = () => {
    const total = carrinho.reduce((acc, item) => acc + item.produtoPreco * item.quantidade, 0);
    return total;
  };

  const aumentarQuantidade = (produtoId) => {
    atualizarQuantidade(produtoId, 1);
  };

  const diminuirQuantidade = (produtoId) => {
    atualizarQuantidade(produtoId, -1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fechartotalflex}>
        <TouchableOpacity style={styles.btn} onPress={() => setdetalhesdopedido(false)}>
          <Text style={styles.btnText}>FECHAR</Text>
        </TouchableOpacity>
        <Text style={styles.total}>Total: R$ {calcularTotal().toFixed(2)}</Text>
      </View>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image style={styles.imagem} source={{ uri: item.produtoFoto }} />
            <View style={styles.caixanomepreco}>
              <Text style={styles.nome}>{item.produtoNome}</Text>
              <Text style={styles.preco}>R$: {(item.produtoPreco * item.quantidade).toFixed(2)}</Text>
              <View style={styles.contador}>
                <TouchableOpacity
                  onPress={() => diminuirQuantidade(item.produtoId)}
                  style={styles.btnAlterarQuantidade}
                >
                  <Text style={styles.btnTextqt}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantidade}>{item.quantidade}</Text>
                <TouchableOpacity
                  onPress={() => aumentarQuantidade(item.produtoId)}
                  style={styles.btnAlterarQuantidade}
                >
                  <Text style={styles.btnTextqt}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removerDoCarrinho(item.produtoId)} style={styles.caixaremover}>
                  <Text style={styles.x}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.produtoId}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  btnText: {
    textAlign: 'center',
    padding: 3,
  },
  btnTextqt: {
    textAlign: 'center',
    marginTop: -2,
  },
  btn: {
    backgroundColor: "#E68F50",
    height: 30,
    width: 175,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  caixanomepreco: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5
  },
  preco: {
    fontSize: 16,
    marginVertical: 5,
  },
  contador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  btnAlterarQuantidade: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantidade: {
    fontSize: 16,
    textAlign: 'center',
  },
  caixaremover: {
    width: 30,
    height: 30,
    backgroundColor: '#FF8B8B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 26,
  },
  fechartotalflex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  total: {
    backgroundColor: "#DADADA",
    height: 30,
    width: 175,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
  },
  x: {
    color: '#303030',
    fontWeight: 'bold',
  },
  flatListContentContainer: {
    paddingBottom: 20,
  },
});
