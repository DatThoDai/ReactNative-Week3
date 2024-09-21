import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [gender, setGender] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text1}>
          REGISTER
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="black"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="black"
          />
          <TouchableOpacity>
            <Image source={require("./images/eye.png")} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Birthday"
          placeholderTextColor="black"
        />
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender('Male')}
          >
            <View style={styles.radioCircle}>
              {gender === 'Male' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender('Female')}
          >
            <View style={styles.radioCircle}>
              {gender === 'Female' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31AA5230',
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 30,
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
  },
  input: {
    backgroundColor: '#c9e0d0',
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  radioContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 40,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  radioText: {
    color: 'black',
  },
  button: {
    backgroundColor: '#c34e3b',
    padding: 15,
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  termsText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default App;
