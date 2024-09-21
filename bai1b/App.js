import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
        style={styles.container}
        start={[0.5, 0.8]}
      >
        <View style={styles.image}>
          <Image source={require("./images/lock.png")} />
        </View>
        <View style={styles.text}>
          <Text style={styles.text1}>
            FORGET {"\n"} PASSWORD
          </Text>
          <Text style={styles.text2}>
            Provide your account’s email for which you {"\n"} want to reset your password
          </Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.rectangleEmail}>
            <Image source={require("./images/mail.png")} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  text: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  text1: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
    width: 300,
    height: 100
  },
  text2: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  bottom: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 40,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#C4C4C4',
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: 350,
    height: 60,
    marginBottom: 100,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
