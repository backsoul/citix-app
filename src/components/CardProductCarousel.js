import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../styles/colors';
import Font from '../styles/font';
const CardProductCarousel = ({item}) => {
  return (
    <View style={styles.content_card}>
      <View style={styles.image_content}></View>
      <Text style={styles.card_text}>{item.title}</Text>
      <View style={styles.card__foooter}>
        <Text style={styles.card_description}>{item.description}</Text>
        <TouchableOpacity style={styles.card_button}>
          <Text style={styles.card_button__text}>Ver Tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image_content: {
    backgroundColor: Colors.gray_medium,
    width: '100%',
    height: 160,
    borderRadius: 20,
  },
  card_text: {
    color: Colors.gray_medium,
    fontWeight: Font.weight.ExtraBold,
    fontSize: Font.size.text_section,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  card_description: {
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: Colors.gray_medium,
  },
  content_card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  card__foooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card_button__text: {
    color: Colors.white,
  },
  card_button: {
    backgroundColor: Colors.gray_medium,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
  },
});
export default CardProductCarousel;
