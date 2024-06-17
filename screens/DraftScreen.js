import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useTheme, Title, Button, Menu, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { createDraft, deleteDraft } from '../Redux/Actions'; // replace with the actual path to your actions
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
    fontSize: windowWidth * 0.07,
    fontWeight: 'bold',
  },
  header: {
    padding: windowHeight * 0.03,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  body: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const DraftScreen = ({ drafts, navigation }) => {
  const { colors } = useTheme();
  const [visible, setVisible] = React.useState(false);
  const [selectedDrafts, setSelectedDrafts] = React.useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <MaterialCommunityIcons name="file-sign" color={colors.primary} size={windowWidth * 0.17} />
        </View>
        <Title style={[styles.title, { color: colors.primary, flex: 1, alignSelf: 'center' }]}>Survey Drafts</Title>
      </View>
      <View style={styles.body}>

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
