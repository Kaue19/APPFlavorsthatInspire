import { Text, View, Image, StyleSheet } from "react-native";

export default function Sobre() {
    return (
        <View>
            <View style={styles.caixa2}>
            <Text style={styles.Texto1}>Sabor dos Céus: Um pedacinho do paraíso em cada mordida</Text>
            </View>
            
            <Image source={require("../assets/Sobreimg.png")} style={styles.imagem} />
            <View style={styles.caixa}>
            <Text style={styles.Texto2}> * A Lanchonete Sabor dos Céus foi fundada em 1995 por dois amigos que compartilham a paixão por transformar momentos simples em experiências deliciosas.</Text>
            <Text style={styles.Texto2}> * Nossa missão é oferecer aos nossos clientes lanches rápidos, saborosos e nutritivos, preparados com ingredientes frescos e de alta qualidade, em um ambiente aconchegante e acolhedor.</Text>
            <Text style={styles.Texto2}> * Acreditamos que a comida é mais do que nutrição, é uma forma de celebrar a vida e conectar-se com as pessoas que amamos.</Text>
            <Text style={styles.Texto2}> * Por isso, colocamos todo o nosso amor e dedicação em cada lanche que preparamos, para que você possa se deliciar e sentir-se no paraíso a cada mordida.</Text>
            <Text style={styles.Texto2}> * Nosso menu oferece uma variedade de lanches para todos os gostos, desde salgados e sanduíches até doces e bebidas refrescantes.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: "80%",
        resizeMode: "stretch",
        height: 200,
        marginLeft: "10%",
        marginTop: "3%",
        borderRadius: 20,
    },
    Texto1: {
        marginTop: "5%",
        marginLeft: "5%",
        fontSize: 20
    },
    Texto2: {
        marginTop: 14,
        marginLeft: "3%",
        fontSize: 13
    },
    caixa: {
        backgroundColor: '#E0CAA6',
        height: 340,
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    caixa2: {
        backgroundColor: '#E0CAA6',
        height: 80,
        width: '90%',
        marginLeft: 20,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10
    },
});