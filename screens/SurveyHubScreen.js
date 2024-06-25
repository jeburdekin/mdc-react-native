import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import SurveyCreatorScreen from './SurveyCreatorScreen';
import DraftScreen from './DraftScreen';
import SentSurvScreen from './SentSurvScreen';
import PreparedSurvScreen from './PreparedSurvScreen';
import DownloadSurvScreen from './DownloadSurvScreen';

const SurveyHubScreen = ({navigation}) => {
  const swiperRef = useRef(null);

  const goToDraftScreen = () => {
    swiperRef.current.scrollBy(1); // scroll to next slide
    navigation.navigate('Survey Screen', { goToReadyScreen });
  };

  const goToReadyScreen = () => {
    swiperRef.current.scrollBy(1); // scroll to next slide
  }

  return (
    <Swiper ref={swiperRef} style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <SurveyCreatorScreen goToDraftScreen={goToDraftScreen} goToReadyScreen={goToReadyScreen}/>
      </View>
      <View style={styles.slide}>
        <DraftScreen navigation={navigation} goToReadyScreen={goToReadyScreen}/>
      </View>
      <View style={styles.slide}>
        <PreparedSurvScreen />
      </View>
      <View style={styles.slide}>
        <SentSurvScreen />
      </View>
      <View style={styles.slide}>
        <DownloadSurvScreen  />
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
