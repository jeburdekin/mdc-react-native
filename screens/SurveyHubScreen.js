import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import SurveyCreatorScreen from './SurveyCreatorScreen';
import DraftScreen from './DraftScreen';
import SentSurvScreen from './SentSurvScreen';

const SurveyHubScreen = ({navigation}) => {
  const swiperRef = useRef(null);

  const goToDraftScreen = () => {
    swiperRef.current.scrollBy(1); // scroll to next slide
  };

  return (
    <Swiper ref={swiperRef} style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <SurveyCreatorScreen goToDraftScreen={goToDraftScreen} />
      </View>
      <View style={styles.slide}>
        <DraftScreen navigation={navigation} />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
  },
});

export default SurveyHubScreen;
