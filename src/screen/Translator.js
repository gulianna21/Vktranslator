import React, {Component, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Picker,
} from 'react-native';
import Languages from '../../languages.json';
import {
  ProviderTypes,
  TranslatorConfiguration,
} from 'react-native-power-translator';

const access =
  'ya29.c.Kp0B6gcbqeaaVy3J0ZfIipL7Hkx3LxcuDrujCHGtSdmgLO1aAqJa1k9TVQnFYbk9vei5mdpzXih3k9jZUw8RVErLu6o8T5pllNU4QgbH98FjYkOiLfnckeGm2tLvq_3WYJY8WHJtH0Oc33Rnwj7l1xYqge8abyGA_rX4r5DorQ-R0QpQBjki_C4gJkXk_-BC3o3maJhWYonBLzNpF-23AA';

export default function Translator() {
  const [languageFrom, setLanguageFrom] = useState('ru');
  const [languageTo, setLanguageTo] = useState('en');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTranslate = () => {
    const q = inputText;
    const query = `format=text&source=${languageFrom}&target=${languageTo}&q=${q}`;
    fetch('https://translation.googleapis.com/language/translate/v2?' + query, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access,
      },
    })
      .then((a) => a.json())
      .then((a) => {
        setOutputText(a.data.translations[0].translatedText);
      });
  };

  TranslatorConfiguration.setConfig(
    ProviderTypes.Google,
    '@google-cloud/translate',
    languageTo,
    languageFrom,
  );
  return (
    <View style={styles.container}>
      <View style={styles.textSel}>
        <Text style={styles.textSelect}>
          Выберите язык с которого переводите:
        </Text>
      </View>
      <Picker
        selectedValue={languageFrom}
        onValueChange={(lang) => {
          setLanguageFrom(lang);
        }}>
        {Object.keys(Languages).map((key, index) => (
          <Picker.Item key={index} label={Languages[key]} value={key} />
        ))}
      </Picker>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Введите текст для перевода"
          underlineColorAndroid="transparent"
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        />
      </View>
      <View style={styles.textSel}>
        <Text style={styles.textSelect}>
          Выберите язык на который переводите:
        </Text>
      </View>
      <Picker
        selectedValue={languageTo}
        onValueChange={(lang) => {
          setLanguageTo(lang);
        }}>
        {Object.keys(Languages).map((key, index) => (
          <Picker.Item key={index} label={Languages[key]} value={key} />
        ))}
      </Picker>
      <View style={styles.output}>
        <Text style={styles.textInput}>{outputText}</Text>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleTranslate()}>
        <Text style={styles.submitButtonText}> Перевести </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 53,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
  },
  output: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
  },
  submitButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    margin: 15,
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
  },
  textInput: {
    flex: 1,
    padding: 12,
  },
  textSelect: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 15,
  },
  textSel: {
    padding: 10,
  },
});
