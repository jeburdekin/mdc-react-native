import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme, Title, Button, Menu, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { createDraft, deleteDraft } from '../Redux/Actions'; // replace with the actual path to your actions


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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <IconButton
              icon="dots-vertical"
              color={colors.primary}
              size={24}
              onPress={() => setVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setVisible(false);
              setSelectedDrafts([]);
            }}
            title="Select Drafts"
          />
          {selectedDrafts.length > 0 && (
            <Menu.Item
              onPress={() => {
                setVisible(false);
                selectedDrafts.forEach(draftId => deleteDraft(draftId));
                setSelectedDrafts([]);
              }}
              title="Delete"
            />
          )}
        </Menu>
      ),
    });
  }, [navigation, visible, selectedDrafts, colors]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={[styles.title, { color: colors.primary }]}>Select a Draft</Title>
      </View>
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
};

const mapStateToProps = (state) => ({
  drafts: state.drafts,
});

const mapDispatchToProps = (dispatch) => ({
  createDraft: (survey) => dispatch(createDraft(survey)),
  deleteDraft: (draftId) => dispatch(deleteDraft(draftId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftScreen);
