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

const PreparedSurvScreen = ({ completedDrafts }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={[styles.title, { color: colors.primary }]}>Completed Surveys</Title>
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
