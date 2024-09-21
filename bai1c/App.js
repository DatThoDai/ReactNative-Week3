import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
        style={StyleSheet.absoluteFillObject}
        start={[0.5, 0.8]}
      >
        <View style={styles.text}>
          <Text style={styles.text1}>
            CODE
          </Text>
          <Text style={styles.text2}>
          VERIFICATION
          </Text>
          <Text style={styles.text3}>
            Enter onetime password sent on {"\n"} +849092605798
          </Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.otpContainer}>
            {Array(6).fill().map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  text: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 100,
  },
  text1: {
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
    width: 200,
    height: 100,
  },
  text2: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
    width: 200,
    height: 100,
    marginTop: 40,
  },
  text3: {
    fontSize: 15,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  otpInput: {
    borderWidth: 1.5,
    borderColor: 'black',
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: 350,
    height: 60,
    marginBottom: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
