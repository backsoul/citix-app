import React from 'react';
import {FlatList, View} from 'react-native';
import CardProduct from './CardProduct';
const ListProducts = ({items}) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={CardProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListProducts;
