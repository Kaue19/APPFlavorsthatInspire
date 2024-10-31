import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, Button, TouchableOpacity, Pressable } from 'react-native';
import Detalhe from "./Detalhe";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './Context/AuthContext';


const TelaHome = () => {

    const [colunas, setColunas] = useState(2);
    const [produtos, setProdutos] = useState([]);
    const [detalhe, setDetalhe] = useState(false);

    const [produto, setProduto] = useState(false);

    const {addCarrinho } = useContext( AuthContext );

    async function getProdutos() {
        await fetch("http://10.133.22.9:5251/api/Produto/GetAllProduto",
            {
                method: "GET"
            }
        )
            .then(res => res.json())
            .then(json => setProdutos(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProdutos();
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image style={styles.imagem} source={{ uri: item.produtoFoto }} />
            <Text style={styles.nome}>{item.produtoNome}</Text>
            <Text style={styles.preco}>R$: {item.produtoPreco}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => { setDetalhe(true); setProduto( item ); }}>
                <Text style={styles.btnText}>Detalhes</Text>
            </TouchableOpacity>
            <View style={styles.caixaflex}>
            <TouchableOpacity style={styles.btn2} onPress={() => addCarrinho( item ) }>
                <Text style={styles.btnText}><MaterialCommunityIcons name="cart"  color={'black'} size={30} /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.btnText}><MaterialCommunityIcons name="heart" color={'black'} size={30} /></Text>
            </TouchableOpacity>
            </View>
        </View>
    );


    return (

        <>
            {detalhe ?
                <Detalhe item={produto} setDetalhe={setDetalhe} />
                :
                <View style={styles.container}>
                    <FlatList
                        data={produtos}
                        renderItem={renderItem}
                        keyExtractor={item => item.produtoId}
                        numColumns={2}
                        contentContainerStyle={styles.lista}
                        columnWrapperStyle={{ gap: 15 }}
                    />
                </View>
            }
        </>


    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center"
    },
    lista: {
        width: "95%",
        alignSelf: "center",
        justifyContent: 'space-around',
        gap: 15
    },
    itemContainer: {
        width: '48%',
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
    btn: {
        backgroundColor: "#E68F50",
        height: 30,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        padding: 4,
    },
    btn2: {
        backgroundColor: "#E68F50",
        height: 40,
        width: '45%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        marginLeft: 5,
        marginBottom: 5,
    },
    caixaflex: {
        flexDirection: 'row',
    }
});

export default TelaHome;