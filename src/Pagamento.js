import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useState } from "react";
import Carrinho from "./Carrinho";
import Icon from 'react-native-vector-icons/FontAwesome';  // Importando a biblioteca de ícones

export default function Pagamento() {
    
    // Estados para armazenar os valores dos campos
    const [numeroCartao, setNumeroCartao] = useState('');
    const [titularCartao, setTitularCartao] = useState('');
    const [mesValidade, setMesValidade] = useState('');
    const [anoValidade, setAnoValidade] = useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');
    const [endereco, setEndereco] = useState('');
    
    const [carrinho, setdetalhesdopedido] = useState(false);

    if (carrinho) {
        return (<Carrinho setdetalhesdopedido={setdetalhesdopedido} />);
    }

    // Função para verificar se todos os campos estão preenchidos
    const verificarCampos = () => {
        if (
            numeroCartao === '' ||
            titularCartao === '' ||
            mesValidade === '' ||
            anoValidade === '' ||
            codigoSeguranca === '' ||
            endereco === ''
        ) {
            Alert.alert("Erro", "Os campos não podem estar vazios!");
        } else {
            onPagamentoConcluido();
        }
    };

    // Função que exibe a mensagem de pagamento concluído
    const onPagamentoConcluido = () => {
        Alert.alert(
            'Pagamento Concluído!',
            'Seu pagamento foi realizado com sucesso, aguarde pacientemente seu pedido.',
            [{ text: 'OK' }],
            { cancelable: false },
        );
    };

    const handleCopyPixCode = () => {
        Alert.alert('Código Pix copiado!', 'O código Pix foi copiado para a área de transferência.');
    };

    return (
        <View>
            <View style={styles.caixa}>
                <Image source={require("../assets/qrcode.jpg")} style={styles.imagem} />
                <TouchableOpacity style={styles.btn} onPress={() => setdetalhesdopedido(true)}>
                    {/* Substituindo o texto por um ícone de carrinho */}
                    <Icon name="shopping-cart" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={handleCopyPixCode}>
                    <Text style={styles.btnText2}>Copiar Código Pix</Text>
                </TouchableOpacity>
                
                {/* Inputs */}
                <TextInput
                    style={styles.input}
                    placeholder='Número do Cartão'
                    value={numeroCartao}
                    onChangeText={setNumeroCartao}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Titular do Cartão'
                    value={titularCartao}
                    onChangeText={setTitularCartao}
                />
                <Text style={styles.text1}>Validade:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Mês'
                    value={mesValidade}
                    onChangeText={setMesValidade}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Ano'
                    value={anoValidade}
                    onChangeText={setAnoValidade}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Código de Segurança'
                    value={codigoSeguranca}
                    onChangeText={setCodigoSeguranca}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Endereço'
                    value={endereco}
                    onChangeText={setEndereco}
                />

                {/* Botão de pagamento */}
                <TouchableOpacity style={styles.btn3} onPress={verificarCampos}>
                    <Text style={styles.btnText3}>PAGAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 30,
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
