import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionChange = (question, option) => {
    setSelectedOption(prevState => ({ ...prevState,
      [question]: option
    }));
  };

  const questions = ['Are you a co-signer or guarantor on any debt or loan that is not disclosed', 'Are there any outstanding judgments against you', 'Are you currently delinquent or in default on federal debt', 'Are you a party to a lawsuit in which you potentially have any personal finance liability', 'Have you conveyed title to any properties ion lieu of foreclosure in the past 7 years', 'Within the past 7 years, have you completed a pre-foreclosure sale or short sale whereby the property was sold to a third party and the lender agreed to accept less than the outstanding mortgage balance due', 'Have you declared bankruptcy within the past 7 years'];
  const bankruptcyTypes = ['Chapter 7', 'Chapter 11', 'Chapter 12', 'Chapter 13'];
  return <SafeAreaView style={styles.container}>
      {questions.map((question, index) => <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionChange(question, 'Yes')}>
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionChange(question, 'No')}>
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>)}
      <Text style={styles.questionText}>Identify the types of bankruptcy</Text>
      <View style={styles.optionsContainer}>
        {bankruptcyTypes.map((type, index) => <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleOptionChange('Bankruptcy Type', type)}>
            <Text style={styles.optionText}>{type}</Text>
          </TouchableOpacity>)}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  questionContainer: {
    marginVertical: 10
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5
  },
  optionText: {
    fontSize: 14
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  navButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default ScreenComponent;