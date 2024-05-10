import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer()
{
    const imagem = ''
    return(
        <View style={styles.container}>
        <Text style={styles.texto} >Este Componente é um Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      widht: 500,
      height:250,
    },

    texto: {
        color: 'black',
        //alignContent: 'center',
        //alignItems: 'center',
        textAlign: 'center'
    }
})