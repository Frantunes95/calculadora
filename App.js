import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: 'purple',
  },
  input: {
    fontSize: 30,
    padding: 10,
    backgroundColor: '#f0f0f0',
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 30,
    padding: 10,
    backgroundColor: '#e0e0e0',
    textAlign: 'right',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: 50,
    padding: 10,
  },
});

const App = () => {
  const [num, setNum] = useState('');
  const [res, setRes] = useState('');

  const botao = (value) => {
    setNum(num + value);
  };

  const calcularResultado = () => {
    try {
      const expressao = num.replace('%', '/100');
      setRes(eval(expressao).toString());
    } catch (e) {
      setRes('Error');
    }
  };

  const limpaNum = () => {
    setNum('');
    setRes('');
  };

  const backspace = () => {
    setNum(num.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={num}
        editable={false}
      />
      <TextInput
        style={styles.result}
        value={res}
        editable={false}
      />
      <View style={styles.buttonContainer}>
        <Button title="C" onPress={limpaNum} />
        <Button title="<--" onPress={backspace} />
        <Button title="%" onPress={() => botao('%')} />
        <Button title="^" onPress={() => botao('**')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="1" onPress={() => botao('1')} />
        <Button title="2" onPress={() => botao('2')} />
        <Button title="3" onPress={() => botao('3')} />
        <Button title="+" onPress={() => botao('+')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="4" onPress={() => botao('4')} />
        <Button title="5" onPress={() => botao('5')} />
        <Button title="6" onPress={() => botao('6')} />
        <Button title="-" onPress={() => botao('-')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="7" onPress={() => botao('7')} />
        <Button title="8" onPress={() => botao('8')} />
        <Button title="9" onPress={() => botao('9')} />
        <Button title="*" onPress={() => botao('*')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="=" onPress={calcularResultado} />
        <Button title="0" onPress={() => botao('0')} />
        <Button title="." onPress={() => botao('.')} />
        <Button title="/" onPress={() => botao('/')} />
      </View>
    </View>
  );
};

export default App;
