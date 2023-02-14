import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import Card from './Components/Card';

function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <View
        style={{
          margin: 10,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '900',
            color: 'white',
            textAlign: 'center',
          }}>
          Patika Store
        </Text>
      </View>
      <ScrollView>
        <TextInput
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 16,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: '#252525',
            marginBottom: 10,
            fontWeight: '600',
            color: 'white',
          }}
          placeholder="Search"
        />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
