import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <View style={styles.search_content}>
      <Icon
        name="search"
        size={22}
        color={Colors.gray_medium}
        style={{paddingRight: 10}}
      />
      <TextInput
        style={{flex: 1}}
        placeholder="Que buscas"
        underlineColorAndroid="transparent"
        placeholderTextColor={Colors.gray_medium}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search_content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_light,
    paddingHorizontal: 18,
    borderWidth: 0.5,
    borderColor: Colors.white_light,
    height: 50,
    borderRadius: 22,
  },
});
export default Search;
