import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useTheme, Title, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  title: {
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    padding: windowHeight * 0.03,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  body: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SentSurvScreen = ({ sentSurveys }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 2.5, alignItems: 'center'}}>
          <MaterialCommunityIcons name="file-replace-outline" color={colors.primary} size={windowWidth * 0.17} style={{justifyContent: 'center'}}/>
        </View>
        <Title style={[styles.title, {color: colors.primary, flex: 7, alignSelf: 'center'}]}>
          Sent Surveys
        </Title>
      </View>
      <View style={styles.body}>

      </View>
    </View>
  );
};
