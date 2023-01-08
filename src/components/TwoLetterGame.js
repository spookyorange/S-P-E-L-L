import React, {useEffect, useState} from 'react';
import Tts from 'react-native-tts';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import letters2 from '../2letters.json';
import colors from '../colors.json';

const allLetters = letters2;
const allColors = colors;

const TwoLetterGame = () => {
  const [letter, setLetter] = useState('');
  const [userInput, setUserInput] = useState('');
  const [color, setColor] = useState(
    allColors[Math.floor(Math.random() * allColors.length)],
  );
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const inputRef = React.createRef();

  useEffect(() => {
    setGame();
  }, []);

  useEffect(() => {
    speak();
  }, [playCount]);

  const setGame = () => {
    setLetter(allLetters[Math.floor(Math.random() * allLetters.length)]);
    setColor(allColors[Math.floor(Math.random() * allColors.length)]);
    setIsCorrect(false);
    setCanNext(false);
    setUserInput('');
    setPlayCount(playCount + 1);
    inputRef.current.focus();
  };

  const speak = () => {
    for (let i in letter) {
      Tts.speak(letter[i]);
    }
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === letter.toLowerCase()) {
      setIsCorrect(true);
      setScore(score + 1);
      setCombo(combo + 1);
    } else {
      setIsCorrect(false);
      setCombo(0);
    }
    setCanNext(true);
  };

  return (
    <View>
      <Text style={styles.headerText}>One Letter</Text>
      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>Count: {playCount}</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.scoreText}>Combo: {combo}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Hear The Letter!" color={color} onPress={speak} />
      </View>
      <Text style={styles.inputLabel}>Type the letter here</Text>
      <TextInput
        value={userInput}
        onChangeText={text => {
          setUserInput(text);
        }}
        focusable={true}
        style={styles.textInput}
        ref={inputRef}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Check"
          color={color}
          onPress={checkAnswer}
          disabled={canNext}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Next'}
          color={isCorrect ? '#16a34a' : '#dc2626'}
          onPress={setGame}
          disabled={!canNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    margin: 12,
  },
  buttonContainer: {
    margin: 12,
  },
  textInput: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    backgroundColor: '#404040',
    margin: 12,
    marginBottom: 22,
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 12,
  },
  scoreText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  inputLabel: {
    marginTop: 22,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default TwoLetterGame;
