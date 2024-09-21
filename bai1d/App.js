import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text1}>
          LOGIN
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Image source={require("./images/eye.png")} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or login with</Text>
      <View style={styles.socialContainer}>
        <View style={styles.group}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#275a8d' }]}>
            <Image source={require("./images/icofacebook.png")} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1593c5' }]}>
            <Image source={require("./images/zalo.png")} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require("./images/icogoogle.png")} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
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
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 30,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
    bottom:0,
  },
  button: {
    backgroundColor: '#c34e3b',
    padding: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "blue",
    textAlign: "center",
    marginBottom: 20,
  },
  orText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  socialContainer: {
    flex: 1,
  },
  group: {
    flexDirection: 'row',
    width: '70%',
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#0680F1',
    padding: 10,
    paddingHorizontal: 40,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

export default App;
