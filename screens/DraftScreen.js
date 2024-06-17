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
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 6,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2.2,
  },
  body: {
    flex: 12,
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
          <MaterialCommunityIcons name="file-sign" color={colors.primary} size={windowHeight * 0.115} />
        </View>
        <Text style={[styles.title, { color: colors.primary, flex: 2.4, alignSelf: 'center' }]}>Survey Drafts</Text>
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
