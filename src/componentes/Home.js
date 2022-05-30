import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, Pressable } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={stylesHome.Home}>
      <View style={stylesHome.NavBar}>
      </View>

      <View style={stylesHome.Text}>
        <Text style={stylesHome.Title}>ELEIÇÕES 2022</Text>
      </View>

      <View style={stylesHome.Buttons}>
        <View>
          <Pressable
            style={stylesHome.Button}
            onPress={() => navigation.navigate('Votar')}>
            <Text style={stylesHome.ButtonText}>Votar</Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={stylesHome.Button}
            onPress={() => navigation.navigate('Resultado')}>
            <Text style={stylesHome.ButtonText}>Resultado</Text>
          </Pressable>
        </View>

      </View>


    </View>
  );
}
const stylesHome = StyleSheet.create({
  NavBar:{
    backgroundColor: 'black',
    width: '100%',
    height: 45,
  },
  Voltar:{
    color: '#fff',
    marginVertical: 15,
    marginLeft: 15
    // textAlign: 'center',
    // marginTop: 'auto',
    // marginRight: 'auto',
    
  },
  Home: {
    alignItems: 'center'
  },
  Text: {
    marginTop: 120
  },
  Title: {
    fontSize: 40
  },
  Button: {
    backgroundColor: 'black',
    maxWidth: 150,
    width: 150,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 5
  },
  Buttons:{
    marginTop: 50
  },
  ButtonText: { color: '#fff', fontSize: 25 }


})