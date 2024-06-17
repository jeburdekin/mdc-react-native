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
    fontSize: windowWidth * 0.1,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    flex: 2.2,
  },
  body: {
    flex: 12,
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
        <View style={{flex: 0.28, alignItems: 'flex-end'}}>
          <MaterialCommunityIcons name="file-replace-outline" color={colors.primary} size={windowHeight * 0.11} />
        </View>
        <View style={{flex: 0.65}}>
          <Text style={[styles.title, {color: colors.primary, alignSelf: 'center'}]}>
            Sent Surveys
          </Text>
        </View>
      </View>
      <View style={styles.body}>

      </View>
    </View>
  );
};
