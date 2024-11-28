import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { useState, useContext } from "react";
import Carrinho from "./Carrinho";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from "./Context/AuthContext";

export default function Pagamento() {
    const { carrinho, limparCarrinho } = useContext(AuthContext);

    const [numeroCartao, setNumeroCartao] = useState('');
    const [titularCartao, setTitularCartao] = useState('');
    const [mesValidade, setMesValidade] = useState('');
    const [anoValidade, setAnoValidade] = useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');
    const [endereco, setEndereco] = useState('');

    const [carrinhoAberto, setdetalhesdopedido] = useState(false);
    const [pagamentoConcluido, setPagamentoConcluido] = useState(false);
    const [processandoPagamento, setProcessandoPagamento] = useState(false);

    if (carrinhoAberto) {
        return (<Carrinho setdetalhesdopedido={setdetalhesdopedido} />);
    }

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
        } else if (pagamentoConcluido) {
            Alert.alert("Pagamento já realizado", "Seu pagamento já foi concluído. Aguarde o pedido ou faça um novo pedido.");
        } else {
            iniciarPagamento();
        }
    };

    const iniciarPagamento = () => {
        setProcessandoPagamento(true);
        setTimeout(() => {
            onPagamentoConcluido();
        }, 2000);
    };

    const onPagamentoConcluido = () => {
        limparCarrinho();
        setPagamentoConcluido(true);
        setProcessandoPagamento(false);
        Alert.alert(
            'Pagamento Concluído!',
            'Seu pagamento foi realizado com sucesso, aguarde pacientemente seu pedido.',
            [{ text: 'OK', onPress: resetarPedido }],
            { cancelable: false },
        );
    };

    const resetarPedido = () => {
        setPagamentoConcluido(false);
        setNumeroCartao('');
        setTitularCartao('');
        setMesValidade('');
        setAnoValidade('');
        setCodigoSeguranca('');
        setEndereco('');
    };

    const handleCopyPixCode = () => {
        Alert.alert('Código Pix copiado!', 'O código Pix foi copiado para a área de transferência.');
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.caixa}>
                    <Image source={require("../assets/qrcode.jpg")} style={styles.imagem} />
                    <TouchableOpacity style={styles.btn} onPress={() => setdetalhesdopedido(true)}>
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
                    <TouchableOpacity
                        style={styles.btn3}
                        onPress={verificarCampos}
                        onPressIn={() => Keyboard.dismiss()}
                        disabled={processandoPagamento || pagamentoConcluido}
                    >
                        <Text style={styles.btnText3}>
                            {processandoPagamento ? 'Processando...' : pagamentoConcluido ? 'Pagamento Concluído' : 'PAGAR'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingBottom: 120,
    },
    caixa: {
        width: '90%',
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
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    },
    btn3: {
        backgroundColor: "#E68F50",
        width: 150,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 90,
        alignItems: 'center',
    },
    btnText3: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
});
