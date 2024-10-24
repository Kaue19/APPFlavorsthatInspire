import { Text, View, Image, StyleSheet } from "react-native";

export default function Local()
{
    return(
        <View>
            <Image source={require("../assets/mapa.jpg")} style={styles.imagem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: "100%",
        resizeMode: "cover",
        height: "100%",
        },
});