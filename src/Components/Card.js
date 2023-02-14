import React from 'react';
import {Image, Text, View} from 'react-native';
import Stores from './CardJson';
function Card() {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 5,
      }}>
      {Stores.map((store, key) => {
        return (
          <View
            key={key}
            style={{
              backgroundColor: '#252525',
              paddingTop: 10,
              borderRadius: 10,
              margin: 5,
              height: 350,
              width: '47%',
            }}>
            <View style={{borderRadius: 10, flex: 1}}>
              <Image
                style={{
                  borderRadius: 10,
                  flex: 3.5,
                  resizeMode: 'cover',
                  marginHorizontal: 10,
                }}
                source={{
                  uri: `${store.imgURL}`,
                }}
              />
              <View style={{flex: 2, marginHorizontal: 10}}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                  }}>
                  {store.title}
                </Text>
                <Text
                  style={{
                    color: '#08f26e',
                    fontSize: 20,
                    fontWeight: '500',
                    marginVertical: 5,
                  }}>
                  {store.price}
                </Text>
                {store.inStock ? (
                  <Text
                    style={{
                      color: '#ff4444',
                      fontSize: 14,
                      fontWeight: '500',
                      marginTop: 5,
                    }}>
                    Stokta Yok
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
export default Card;
