import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Stores from './CardJson';
function Card() {
  return (
    <View style={style.container}>
      {Stores.map((store, key) => {
        return (
          <View key={key} style={style.container_inner}>
            <View style={style.container_inner_inner}>
              <Image
                style={style.img}
                source={{
                  uri: `${store.imgURL}`,
                }}
              />
              <View style={{flex: 2, marginHorizontal: 10}}>
                <Text numberOfLines={2} style={style.title}>
                  {store.title}
                </Text>
                <Text style={style.price}>{store.price}</Text>
                {store.inStock ? (
                  <Text style={style.inStock}>Stokta Yok</Text>
                ) : null}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
  container_inner: {
    backgroundColor: '#252525',
    paddingTop: 10,
    borderRadius: 10,
    margin: 5,
    height: 350,
    width: '47%',
  },
  container_inner_inner: {borderRadius: 10, flex: 1},
  img: {borderRadius: 10, flex: 3.5, resizeMode: 'cover', marginHorizontal: 10},
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  price: {color: '#08f26e', fontSize: 20, fontWeight: '500', marginVertical: 5},
  inStock: {color: '#ff4444', fontSize: 14, fontWeight: '500', marginTop: 5},
});
export default Card;
