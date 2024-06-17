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

const PreparedSurvScreen = ({ completedDrafts }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

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

      </View>
      {/* {completedDrafts.map((draft, index) => (
        <Button
          key={index}
          mode="contained"
          style={{
            backgroundColor: colors.primary,
            marginTop: 20,
            borderWidth: 12,
            width: '90%',
          }}
          onPress={() => {
            navigation.navigate('Survey Screen', { draftData: draft });
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {typeof draft.name === 'string' ? draft.name : 'No name'}
          </Text>
        </Button>
      ))} */}
    </View>
  );
};

// const mapStateToProps = (state) => ({
//   completedDrafts: state.completedDrafts, // replace with the actual path to your completed drafts in the state
// });

// export default connect(mapStateToProps)(PreparedSurvScreen);
export default PreparedSurvScreen;
