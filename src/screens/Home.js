import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '.././styles/colors';
import Search from '../components/Search';
import Font from '.././styles/font';
const Home = () => {
  const user = {name: 'Daniel'};
  return (
    <View style={styles.content}>
      <View style={styles.content__header}>
        <Text style={styles.content__headerText}>
          ¡Buenos días {user.name}!
        </Text>
        <Icon
          name="shopping-cart"
          color={Colors.gray_medium}
          size={22}
          onPress={() => console.log('hola!')}
        />
      </View>
      <Search />
      <Text style={styles.section__text}>Toures Gastronómicos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  content__header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  content__headerText: {
    fontSize: Font.size.title,
    // @ts-ignore
    fontWeight: Font.weight.ExtraBold,
    color: Colors.gray_dark,
  },
  section__text: {
    color: Colors.gray_medium,
    marginTop: 30,
    fontWeight: Font.weight.ExtraBold,
    fontSize: Font.size.text_section,
    marginVertical: 20,
  },
});
export default Home;
