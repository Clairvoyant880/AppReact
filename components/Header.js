import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header()
{
    return(

        <View>
            <Text style={{color:'black', fontSize: 50}}>//Este Componente é um Header//</Text>
            <Image 
            source={{uri: "https://images.alphacoders.com/113/thumb-1920-1138740.png"}}
            style={{widht: 500, height: 250, borderRadius: 100}}
            />

        </View>
    )
}