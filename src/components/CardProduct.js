import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/colors';
import Font from '../styles/font';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardProduct = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_content}></View>
      <View style={styles.card_information}>
        <Text style={styles.text_title}>Tour del Cafe</Text>
        <Text style={styles.text_subtitle}>Lugar: Mesa De los Santos</Text>
        <Text style={styles.text_days}>1 Día</Text>
      </View>
      <Icon
        name="ellipsis-h"
        size={22}
        color={Colors.gray_medium}
        style={{paddingRight: 10}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text_title: {
    fontSize: 14,
    fontWeight: Font.weight.ExtraBold,
    color: Colors.gray_medium,
  },
  text_subtitle: {
    fontSize: 12,
    fontWeight: Font.weight.ExtraBold,
    color: Colors.gray_medium,
  },
  text_days: {
    fontSize: 12,
    fontWeight: '200',
    color: Colors.gray_medium,
  },
  image_content: {
    backgroundColor: Colors.gray_medium,
    width: '20%',
    height: 80,
    borderRadius: 20,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  card_information: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
});
export default CardProduct;
