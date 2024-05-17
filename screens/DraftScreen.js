import * as React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { useTheme, Title, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { createDraft } from '../Redux/Actions'; // replace with the actual path to your actions

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

const DraftScreen = ({ drafts, navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Title style={[styles.title, {color: colors.primary}]}>Draft Screen</Title>
      {drafts.map((draft, index) => (
        <Button
          key={index}
          mode="contained"
          style={{ backgroundColor: colors.primary, marginTop: 20 }}
          onPress={() => {
            navigation.navigate('Survey Screen', { draftData: draft });
          }}
        >
          {typeof draft.name === 'string' ? draft.name : 'No name'}
        </Button>
      ))}
    </View>
  );
}

const mapStateToProps = state => ({
  drafts: state.drafts,
});

const mapDispatchToProps = dispatch => ({
  createDraft: survey => dispatch(createDraft(survey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftScreen);