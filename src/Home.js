import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, Button, TouchableOpacity, Modal, Pressable } from 'react-native';
import Detalhe from "./Detalhe";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './Context/AuthContext';

const TelaHome = () => {

    const [colunas, setColunas] = useState(2);
    const [produtos, setProdutos] = useState([]);
    const [detalhe, setDetalhe] = useState(false);
    const [produto, setProduto] = useState(false);
    
    // Estado para controlar o modal
    const [modalVisible, setModalVisible] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState('');

    const { addCarrinho } = useContext(AuthContext);
    const { addFavoritar } = useContext(AuthContext);

    async function getProdutos() {
        await fetch(process.env.EXPO_PUBLIC_URL + "api/Produto/GetAllProduto", {
            method: "GET"
        })
        .then(res => res.json())
        .then(json => setProdutos(json))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProdutos();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => { setImagemSelecionada(item.produtoFoto); setModalVisible(true); }}>
                <Image style={styles.imagem} source={{ uri: item.produtoFoto }} />
            </TouchableOpacity>
            <Text style={styles.nome}>{item.produtoNome}</Text>
            <Text style={styles.preco}>R$: {item.produtoPreco}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => { setDetalhe(true); setProduto(item); }}>
                <Text style={styles.btnText}>Detalhes</Text>
            </TouchableOpacity>
            <View style={styles.caixaflex}>
                <TouchableOpacity style={styles.btn2} onPress={() => addCarrinho(item)}>
                    <Text style={styles.btnText}><MaterialCommunityIcons name="cart" color={'black'} size={30} /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => addFavoritar(item)}>
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

            {/* Modal para exibir a imagem maior */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeText}  onPress={() => setModalVisible(false)}>X</Text>
                        </TouchableOpacity>
                        <Image style={styles.modalImage} source={{ uri: imagemSelecionada }} />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
    },
    lista: {
        width: "95%",
        alignSelf: "center",
        justifyContent: 'space-around',
        gap: 15,
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
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1
    },
    imagem: {
        width: '90%',
        height: 150,
        resizeMode: 'contain',
        marginLeft: '5%',
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    preco: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 5
    },
    btnText: {
        textAlign: 'center',
    },
    btn: {
        backgroundColor: "#E68F50",
        height: 30,
        width: '90%',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 5,
        padding: 4,
        marginLeft: '5%'
    },
    btn2: {
        backgroundColor: "#E68F50",
        height: 40,
        width: '40%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        marginLeft: 12,
        marginBottom: 5,
    },
    caixaflex: {
        flexDirection: 'row',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)', // Semitransparente para o fundo
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
    },
    modalImage: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.5,
        resizeMode: 'contain',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: 20,
        padding: 5,
    },
    closeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default TelaHome;
