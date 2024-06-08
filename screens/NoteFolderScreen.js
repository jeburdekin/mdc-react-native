import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fffcf7",
  },
  circularButton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: '#D9695F',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  innerModalView: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTextInput: {
    height: 100,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 10,
  },
});

const NoteFolderScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [noteIndexToEdit, setNoteIndexToEdit] = useState(null);
  const [notes, setNotes] = useState([]);

  const handleSaveNote = () => {
    if (noteText.trim()) {
      if (noteIndexToEdit !== null) {
        const updatedNotes = [...notes];
        updatedNotes[noteIndexToEdit].text = noteText;
        setNotes(updatedNotes);
        setNoteIndexToEdit(null);
      } else {
        setNotes([...notes, { text: noteText, isExpanded: false }]);
      }
      setNoteText("");
    }
    setModalVisible(false);
  };

  const toggleNoteExpansion = (index) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, isExpanded: !note.isExpanded } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const updatedNotes = [...notes];
            updatedNotes.splice(index, 1);
            setNotes(updatedNotes);
          },
          style: "destructive",
        },
      ]
    );
  };

  const editNote = (index) => {
    setNoteText(notes[index].text);
    setNoteIndexToEdit(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        {notes.map((note, index) => (
          <TouchableOpacity key={index} onPress={() => toggleNoteExpansion(index)} style={{ padding: 10, marginTop: 20, backgroundColor: "#eee", marginHorizontal: 20, borderRadius: 5 }}>
            <Text>
              {note.isExpanded ? note.text : note.text.split("\n")[0]}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <TouchableOpacity onPress={() => editNote(index)}>
                <Text style={{ color: 'blue' }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteNote(index)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => {
            setNoteIndexToEdit(null);
            setModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {/* Placeholder button for future audio recording feature */}
        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => console.log('Audio recording placeholder')}
        >
          <Text style={styles.buttonText}>🎙</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.innerModalView}>
            <Text style={styles.modalText}>Create a new note:</Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={styles.modalTextInput}
              onChangeText={setNoteText}
              value={noteText}
            />
            <Button title="Save Note" onPress={handleSaveNote} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoteFolderScreen;