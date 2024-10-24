import { View, Text, Button, Image, StyleSheet, TouchableOpacity} from "react-native"
 export default function Detalhe({setDetalhe}){
    return(
        <View>
            <Image style={styles.imagem} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUolMg5w_g-cO1L0-gkIprx06vxoS8fM88OA&usqp=CAU'}} />
            <View >
            <Text style={styles.text}>Ingredientes:</Text>
            <Text style={styles.text}>* Carne moída de boa qualidade</Text>
            <Text style={styles.text}>* Pão de hambúrguer</Text>
            <Text style={styles.text}>* Queijo</Text>
            <Text style={styles.text}>* Presunto, bacon </Text>
            <Text style={styles.text}>* Legumes: tomate, cebola, alface</Text>
            <Text style={styles.text}>* Molhos: maionese, ketchup, mostarda, barbecue</Text>
            <Text style={styles.text}>R$: 14,90 </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                 <Text style={styles.btnText} onPress={() => setDetalhe( false )}>FECHAR</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    imagem: {
        width: '80%',
        height: 200,
        borderRadius: 20,
        marginLeft: '10%',
        marginTop: '5%'
      },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 18
      },
      btnText: {
        textAlign: 'center',
      },
      btn:{
        backgroundColor: "#E68F50",
        height: 30,
        width: 135,
        marginLeft: '35%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '5%'
      },
})