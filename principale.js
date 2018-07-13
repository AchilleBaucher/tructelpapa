import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
class TrouverPrenom extends Component{
  render(){
    return(
      <Text style={styles.paragraph}>Achille</Text>
      );
  }
}
class TrouverGenre extends Component{
  render(){
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(res => {
      if (res.ok){
         return res.json());
        }
      else throw new Error(res)
    .then(json => {
      return 
      .catch(error => console.log(error)
    }
  }
}

class TrouverNom extends Component{
  render(){
    return(
      <Text style={styles.paragraph}>Baucher</Text>
      );
  }
}
class TrouverPhoto extends Component{
  render(){
    return(
      'https://randomuser.me/api/portraits/med/men/89.jpg'
      );
  }
}
export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://randomuser.me/api/portraits/med/men/89.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Prenom:
        </Text>
        <Text style={styles.paragraph}>
          Nom:
        </Text>
        <TrouverNom/>
        <Image source={pic} style={{width: 72, height: 72}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
