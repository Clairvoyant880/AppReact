import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      
      <TextInput
      style={styles.input}
      placeholder= 'Digite o Login'
      />

      <TextInput
      style={styles.input}
      placeholder= 'Digite a Senha'
      />

      <Button 
        title='Logar'      
      />

      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input:{
    widht: 200,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 50,
    padding: 5
  }
});
