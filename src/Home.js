import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';
import Detalhe from "./Detalhe";

const produtos = [
  {
    id: 1,
    nome: 'Hambúrguer              Especial ',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUolMg5w_g-cO1L0-gkIprx06vxoS8fM88OA&usqp=CAU',
    preco: 'R$: 14,90',
  },
  {
    id: 2,
    nome: 'Cachorro Quente Simples',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQl7jRUIUiDvRDZBybL4PkR8YudEbEDevpw&usqp=CAU',
    preco: 'R$: 10,00',
  },
  {
    id: 3,
    nome: 'Pizza de Calabresa',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKdm_550d5hl0ZhqbMpVc6NPZjVo2Z5SIvQ&usqp=CAU',
    preco: 'R$: 12,90',
  },
  {
    id: 4,
    nome: 'Porção de Batata Frita',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvbvOA-blwWJMMHL1yUwyLuzn4V2WuC1uUA&usqp=CAU',
    preco: 'R$: 12,00',
  },
  {
    id: 5,
    nome: 'Suco natural de limão',
    imagem: 'https://a-static.mlcdn.com.br/450x450/suco-de-limao-recanto-da-val/recantodaval/dfbe6c2e5ecf11ec91c44201ac18503a/fb3fe5cb288c3c475fa970777fbe8057.jpeg',
    preco: 'R$ 8,00',
  },
  {
    id: 6,
    nome: 'Coca cola 2l',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWm-kI1nliv5PnmiNoRRiRqQTJQG9wUfKYw&usqp=CAU',
    preco: 'R$ 13,99',
  },
  {
    id: 7,
    nome: 'Brigadeiro             Caseiro',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcdkTzOR5yLbFCK_fppHMUbYr4oyHEq0Ngg&usqp=CAU',
    preco: 'R$ 4,99',
  },
  {
    id: 8,
    nome: 'Salgadinho Doritos Grande',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29Xq8tBSFKBbne6b1eNHd015rNQ3Ly0bYyA&usqp=CAU',
    preco: 'R$ 14,99',
  },
  {
    id: 9,
    nome: 'Sanduíche Natural de Frango',
    imagem: 'https://static.itdg.com.br/images/1200-675/c0467524b29fe15f0cf2927ed848fab0/320181-original.jpg',
    preco: 'R$ 8,99',
  },
  {
    id: 10,
    nome: 'Pastéis em                 geral',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GnMHP_HYDiBBrh-O5QdRwvuICsjxyDk2ZQ&usqp=CAU',
    preco: 'R$ 9,99',
  },
];

const TelaHome = () => {
  const [colunas, setColunas] = useState(2);


  useEffect(() => {
    const atualizarColunas = () => {
      const larguraJanela = Dimensions.get('window').width;
      const larguraItem = 150; 
      const numeroColunas = Math.floor(larguraJanela / larguraItem);
      setColunas(numeroColunas);
    };

    Dimensions.addEventListener('change', atualizarColunas);
    return () => Dimensions.removeEventListener('change', atualizarColunas);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.imagem} source={{ uri: item.imagem }} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=> setDetalhe(true)}>
        <Text style={styles.btnText}>Detalhes</Text>
      </TouchableOpacity>

    </View>
  );

  

  const [ detalhe, setDetalhe ] = useState(false);

  if( detalhe ) {
    return( <Detalhe setDetalhe={setDetalhe} />)
  }

  return (
    <View style={styles.container}>
      <FlatList
        setDetalhe={setDetalhe}
        data={produtos}
        renderItem={renderItem}
        numColumns={colunas}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lista: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    width: '50%',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    textAlign: 'center',
  },
  btnText: {
    textAlign: 'center',
  },
  btn:{
    backgroundColor: "#E68F50",
    height: 30,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default TelaHome;