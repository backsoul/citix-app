import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import CardProductCarousel from './CardProductCarousel';
import Carousel from 'react-native-snap-carousel';

const ListProductsCarousel = ({items}) => {
  const SLIDER_WIDTH = Dimensions.get('window').width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const isCarousel = React.useRef(null);
  return (
    <View style={styles.carousel_container}>
      <Carousel
        ref={isCarousel}
        data={items}
        renderItem={CardProductCarousel}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListProductsCarousel;
