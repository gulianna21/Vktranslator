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
  'ya29.c.Ko8B0AfecCSZ5_kw-SiWXO0M5xTFC7zqKwtIrcwScQ0NcfT9oyz-_4j74hj618FUvW3Atep3AYIj-h7Je0POA6kswdYKzOCUz3TDgh0T-ov86aQomo21Ese-QjDkxhO6Z7viRCdf1Qm0tPKQrG51w2av2-acLcw4PrjlXHQVuZSTchHs4MZA7pygDIt2hFHOg1o';
export default function Translator() {
  const [languageFrom, setLanguageFrom] = useState('');
  const [languageTo, setLanguageTo] = useState('');
  const [languageCode, setLanguageCode] = useState('en');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleTranslate = () => {
    const source = 'ru';
    const q = inputText;
    const query = `format=text&source=${source}&target=${languageCode}&q=${q}`;
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
    languageCode,
  );
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Введите текст на русском языке для перевода"
          underlineColorAndroid="transparent"
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        />
      </View>
      <Text style={styles.textSelect}>
        Укажите на какой язык необходимо перевести:
      </Text>
      <Picker
        selectedValue={languageTo}
        onValueChange={(lang) => {
          setLanguageTo(lang), setLanguageCode(lang);
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
    backgroundColor: '#7a42f4',
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
  },
});
