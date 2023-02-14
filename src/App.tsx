import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Card from './Components/Card';

function App() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.logo}>
        <Text style={style.logo_inner}>Patika Store</Text>
      </View>
      <ScrollView>
        <TextInput style={style.input} placeholder="Search" />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {backgroundColor: 'black', height: '100%'},
  logo: {
    margin: 10,
    paddingVertical: 10,
  },
  logo_inner: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#252525',
    marginBottom: 10,
    fontWeight: '600',
    color: 'white',
  },
});

export default App;
