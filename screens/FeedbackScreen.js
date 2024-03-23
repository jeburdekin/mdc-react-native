import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Rating } from 'react-native-ratings';

const FeedbackScreen = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [followUp, setFollowUp] = useState(null);

  const ratingCompleted = (rating) => {
    setRating(rating);
  };

  const submitFeedback = () => {
    console.log("Submitted Rating: ", rating);
    console.log("Submitted Comments: ", comments);
    console.log("Follow-up consent: ", followUp);
    // Handle submission logic here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.questionText}>How was your experience?</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={40}
          showRating
          onFinishRating={ratingCompleted}
        />
        <Text style={styles.questionText}>Do you have any thoughts you'd like to share?</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          onChangeText={setComments}
          value={comments}
          placeholder="Write your comments here"
        />
        <Text style={styles.questionText}>May we follow up on your feedback?</Text>
        <View style={styles.followUpButtons}>
          <TouchableOpacity
            style={styles.buttonYesNo}
            onPress={() => setFollowUp(true)}
          >
            <Text style={followUp === true ? styles.buttonTextBold : styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonYesNo}
            onPress={() => setFollowUp(false)}
          >
            <Text style={followUp === false ? styles.buttonTextBold : styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Submit Feedback"
          onPress={submitFeedback}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  followUpButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonYesNo: {
    marginHorizontal: 10,
    backgroundColor: '#D9695F',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  buttonTextBold: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
