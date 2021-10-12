import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} 
from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import photo from './assets/photo';
import Card from './components/Card';

const App = () => {

  function handleSocialNet(social_net) {
    switch(social_net){

      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://linkedin.com/in/bruno-domingues-da-silva/')
      break
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/brunood07/')
      break
      case 'facebook':
        Alert.alert('Meu FaceBook', 'https://www.facebook.com/bruno.dominguesdasilva/')
      break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_header}>
          <Image src={photo} style={style.photo} />
          <Text style={style.nome}>Bruno Domingues da Silva</Text>
          <Text style={style.funcao}>Desenvolvedor Frontend</Text>
          <View style={style.socialNet}>
            <TouchableOpacity onPress={() => handleSocialNet('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialNet('facebook')}>
              <Icon name="facebook" size={30} />    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialNet('linkedin')}>
              <Icon name="linkedin" size={30} />            
            </TouchableOpacity>
          </View>
        </View>   

        <Card titulo="Formação Academica">
          <Text style={style.cardContentText}>Engenharia de Segurança do Trabalho - UNISANTA</Text>
          <Text style={style.cardContentText}>Engenharia Química - UNISANTA</Text>
        </Card>
        <Card titulo="Experiências Profissionais">
          <Text style={style.cardContentText}>ASL - Serviços Marítimos</Text>
          <Text style={style.cardContentText}>Laboratório de Operações Unitárias</Text>
        </Card>

      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  socialNet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10,
}
})

export default App;
