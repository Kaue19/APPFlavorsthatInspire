import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useState } from "react";
import Carrinho from "./Carrinho";

export default function Pagamento() {

    

    const onPagamentoConcluido = () => {
        Alert.alert(
          'Pagamento Concluído!',
          'Seu pagamento foi realizado com sucesso, aguarde pacientemente seu pedido.',
          [{ text: 'OK' }],
          { cancelable: false },
        );
      };

    const [ carrinho, setdetalhesdopedido ] = useState(false);

    if( carrinho ) {
      return( <Carrinho setdetalhesdopedido={setdetalhesdopedido} />)
    }

    return (
        <View>
            <View style={styles.caixa}>
                <Image source={require("../assets/qrcode.jpg")} style={styles.imagem} />
                <TouchableOpacity style={styles.btn}>
                 <Text style={styles.btnText} onPress={()=> setdetalhesdopedido(true)}>Detalhes do Pedido</Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText2}>Copiar Código Pix</Text>
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder='Número do Cartão' />
                <TextInput style={styles.input} placeholder='Titular do Cartão' />
                <Text style={styles.text1}>Validade:</Text>
                <TextInput style={styles.input} placeholder='20' />
                <TextInput style={styles.input} placeholder='12' />
                <TextInput style={styles.input} placeholder='Código de Segurança:' />
                <TextInput style={styles.input} placeholder='Endereço:' />
                <TouchableOpacity style={styles.btn3}>
                    <Text style={styles.btnText3} onPress={onPagamentoConcluido}>PAGAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    caixa: {
        width: '90%',
        height: 620,
        borderWidth: 1,
        padding: 15,
        borderRadius: 15,
        marginTop: 15,
        marginLeft: 15,
    },
    btn: {
        width: 150,
        height: 40,
        borderRadius: 15,
        marginTop: -90,
        borderWidth: 1,
        marginLeft: 150,
    },
    btnText: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 30,
    },
    Textovalor: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: -45,
        marginRight: 150,
    },
    imagem: {
        width: 100,
        resizeMode: "stretch",
        height: 100,
        marginLeft: 10,
        borderRadius: 20,
        marginTop: -12
    },
    btn2: {
        width: 150,
        height: 40,
        borderRadius: 15,
        marginTop: 10,
        borderWidth: 1,
        marginLeft: 150,
        backgroundColor: '#E6954A'
    },
    btnText2: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 50,
        lineHeight: 30,
    },
    input: {
        width: '90%',
        height: 50,
        fontSize: 15,
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        marginTop: 19,
        marginLeft: 10
    },
    text1: {
        marginLeft: '38%',
        marginTop: 10,
        fontSize: 15
    },
    btn3: {
        width: '70%',
        height: 40,
        backgroundColor: '#F5C185',
        borderRadius: 15,
        borderWidth: 1,
        marginLeft: 45,
        textAlign: 'center',
        marginTop: 20,
    },
    btnText3: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 35,
    },
});

