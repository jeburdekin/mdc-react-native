import React from 'react';
import { Button, Text, useTheme, Title } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffcf7',
  },
  title:{
    fontSize: 24, fontWeight: 'bold'
  }
});

const SurveyManagerScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Title style={[styles.title, {color: colors.primary}]}>Survey Manager Screen</Title>
      <Button
        mode="contained"
        style={{ backgroundColor: colors.primary, marginTop: 20 }}
        onPress={() => (navigation.navigate("Survey Screen"))}
      >
        W.H.O. Autopsy Survey
      </Button>
    </View>
  );
}

export default SurveyManagerScreen;
