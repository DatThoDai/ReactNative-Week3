import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require("./images/eyeball.png")} style={styles.eyeIconTop} />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require("./images/user.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image source={require("./images/lock.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Please input password"
            secureTextEntry={!showPassword}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Register</Text>
        <Text style={styles.linkText}>Forgot Password</Text>
      </View>
      <View style={styles.otherLoginContainer}>
        <View style={styles.line} />
        <Text style={styles.otherLoginText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconContainer}>
        <Image source={require("./images/icoadduser.png")} style={styles.socialIcon} />
        <Image source={require("./images/icowifi.png")} style={styles.socialIcon} />
        <View style={styles.facebookIconContainer}>
          <Image source={require("./images/icofacebook.png")} style={styles.facebookIcon} />
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
    backgroundColor: 'white',
  },
  eyeIconTop: {
    width: 130,
    height: 100,
    marginBottom: 60,
  },
  inputContainer: {
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: 'black',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: '#386FFC',
    padding: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  linkText: {
    color: 'black',
    fontSize: 16,
  },
  otherLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'blue',
  },
  otherLoginText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  facebookIconContainer: {
    backgroundColor: '#3b5998',
    borderRadius: 5,
    padding: 5,
    width: 50,
    justifyContent: 'center',
    alignItems:'center',
  },
  facebookIcon: {
    width: 30,
    height: 40,
  },
});

export default App;
