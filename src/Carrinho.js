import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native"

 export default function Carrinho({setdetalhesdopedido}){
    return(
        <View>
            <Image style={styles.imagem} source={{ uri: 'https://www.mrchang.com.br/Content/projeto/img/cesta-vazia.png'}} />
            <TouchableOpacity style={styles.btn}>
                 <Text style={styles.btnText} onPress={() => setdetalhesdopedido( false )}>FECHAR</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    imagem: {
        width: '80%',
        height: 250,
        borderRadius: 20,
        marginLeft: '10%',
        marginTop: '35%'
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
        marginTop: '60%'
      },
})