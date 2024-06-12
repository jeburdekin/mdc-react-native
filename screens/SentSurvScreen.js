import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme, Title, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
  }
});

export default SentSurvScreen = ({ sentSurveys }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={[styles.title, { color: colors.primary }]}>Sent Surveys</Title>
      </View>
    </View>
  );
};
