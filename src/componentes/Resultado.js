import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, Pressable } from 'react-native';

export default function Resultado({ navigation }) {
  return (
    <View>

      <View style={stylesResultado.NavBar}>
        <Pressable onPress={() => navigation.navigate('Votar')}>
          <Text style={stylesResultado.Voltar}>Voltar</Text>
        </Pressable>
      </View>


      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text >Home</Text>
      </Pressable>
    </View>
  );
}

const stylesResultado = StyleSheet.create({
  NavBar: {
    backgroundColor: 'black',
    width: '100%',
    height: 45,
  },
  Voltar: {
    color: '#fff',
    marginVertical: 15,
    marginLeft: 15
  },
})