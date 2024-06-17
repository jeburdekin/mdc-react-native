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
    fontSize: 30,
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
    justifyContent: 'space-evenly'
  }
});

export default SentSurvScreen = ({ sentSurveys }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="file-replace-outline" color={colors.primary} size={windowHeight * 0.075} />
        <Title style={[styles.title, { color: colors.primary }]}>Uploaded Surveys</Title>
      </View>
    </View>
  );
};
