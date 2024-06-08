import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme, Title, Button, Menu, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { createDraft, deleteDraft } from '../Redux/Actions'; // replace with the actual path to your actions
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

const DraftScreen = ({ drafts, navigation }) => {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [selectedDrafts, setSelectedDrafts] = React.useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={[styles.title, { color: colors.primary }]}>Select a Draft</Title>
      </View>
      {drafts.map((draft, index) => (
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
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  drafts: state.drafts,
});

const mapDispatchToProps = (dispatch) => ({
  createDraft: (survey) => dispatch(createDraft(survey)),
  deleteDraft: (draftId) => dispatch(deleteDraft(draftId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftScreen);
