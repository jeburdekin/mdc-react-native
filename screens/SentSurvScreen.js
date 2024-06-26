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
    fontSize: windowHeight * 0.05,
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
        <View style={{flex: 2.5, alignItems: 'flex-end'}}>
          <MaterialCommunityIcons name="file-replace-outline" color={colors.primary} size={windowHeight * 0.115} />
        </View>
        <View style={{flex: 5.5}}>
          <Text style={[styles.title, {color: colors.primary, alignSelf: 'center'}]}>
            Sent
          </Text>
          <Text style={[styles.title, {color: colors.primary, alignSelf: 'center'}]}>
            Surveys 
          </Text>
        </View>
      </View>
      <View style={styles.body}>

      </View>
    </View>
  );
};
