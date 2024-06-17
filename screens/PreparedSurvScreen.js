import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useTheme, Title, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

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
    justifyContent: 'space-evenly',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    flex: 1,
  },
  body: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
  },
});

const PreparedSurvScreen = ({ completedSurveys }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  console.log('completedSurveys:', completedSurveys);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{alignItems: 'center'}}>
          <MaterialCommunityIcons name="checkbox-multiple-marked-outline" color={colors.primary} size={windowHeight * 0.075} />
        </View>
        <View>
          <Text style={[styles.title, { color: colors.primary, alignSelf: 'center' }]}>Completed</Text>
          <Text style={[styles.title, { color: colors.primary, alignSelf: 'center' }]}>Surveys</Text>
        </View>
      </View>
      <View style={styles.body}>
        {completedSurveys.map((survey, index) => (
          <Button
            key={index}
            mode="contained"
            style={{
              backgroundColor: colors.primary,
              marginTop: 20,
              borderWidth: 12,
              width: windowWidth * 0.9,
              height: windowHeight * 0.1,
            }}
            onPress={() => {
              navigation.navigate('Survey Screen', { surveyData: survey });
            }}
          >
            <Text style={{ fontSize: 20 }}>
              {typeof survey.name === 'string' ? survey.name : 'No name'}
            </Text>
          </Button>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log('State in mapStateToProps:', state);
  return {
    completedSurveys: state.surveys.filter((survey) => survey.isSurveyCompleted),
  };
};

export default connect(mapStateToProps)(PreparedSurvScreen);
