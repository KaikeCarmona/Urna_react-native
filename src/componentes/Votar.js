import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Votar({ navigation }) {

  const [checked, setChecked] = React.useState('first');
  return (
    <View>

      <View style={stylesVotar.NavBar}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={stylesVotar.Voltar}>Voltar</Text>
        </Pressable>
      </View>


      <View style={stylesVotar.Title}>
        <Text style={stylesVotar.TitleText}>ESCOLHA O CANDIDATO</Text>
      </View>

      <View style={stylesVotar.Canditados}>

        <View style={stylesVotar.CanditadosRow}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={stylesVotar.CanditadosText}>Canditado 1</Text>
        </View>

        <View style={stylesVotar.CanditadosRow}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={stylesVotar.CanditadosText}>Canditado 2</Text>
        </View>

        <View style={stylesVotar.CanditadosRow}>
          <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
          <Text style={stylesVotar.CanditadosText}>Canditado 3</Text>
        </View>
        

        <View style={stylesVotar.CanditadosRow}>
          <RadioButton
            value="fourth"
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fourth')}
          />
          <Text style={stylesVotar.CanditadosText}>Canditado 4</Text>
        </View>

        <View style={stylesVotar.CanditadosRow}>
        <RadioButton
            value="fifth"
            status={checked === 'fifth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fifth')}
          />
          <Text style={stylesVotar.CanditadosText}>Em branco</Text>
        </View>

      </View>


      <View style={stylesVotar.Bottons}>
        <View style={stylesVotar.Button}>
          <Pressable onPress={() => navigation.navigate('Resultado')}>
            <Text style={stylesVotar.ButtonText}>Confirmar</Text>
          </Pressable>
        </View>
      </View>


    </View>
  )
}
const stylesVotar = StyleSheet.create({
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
  Title: {
    textAlign: 'center',
    marginTop: 120
  },
  TitleText: {
    fontSize: 30
  },
  Canditados: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 120
  },
  CanditadosText: {
    fontSize: 20,
    marginTop: 5
  },
  Bottons: {
    alignItems: 'center'
  },
  Button: {
    backgroundColor: 'black',
    maxWidth: 150,
    width: 150,
    textAlign: 'center',
    marginTop: 10,
    borderRadius: 5
  },
  ButtonText: {
    color: '#fff',
    fontSize: 25
  },
  CanditadosRow:{
    width:'100%',
    flexDirection: 'row',
  }
});