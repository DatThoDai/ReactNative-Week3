import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]} style={styles.container} start={[0.5, 0.8]}>
        <View style={styles.image}>
          <Image source={require("./images/circle.png")} />
        </View>
        <View style={styles.text}>
          <View style={styles.text1}>
            <Text
              style={[
                { fontSize: 30 },
                { color: "black" },
                { fontWeight: "bold", textAlign: 'center', width: 300, height: 100 },
              ]}
            >
              GROW{"\n"}YOUR BUSINESS
            </Text>
          </View>
          <View style={styles.text2}>
            <Text style={[{ fontSize: 17, color: "black", fontWeight: "bold", textAlign: "center", paddingHorizontal: 20 }]}>
              We will help you to grow your business using{"\n"}online server
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtn}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSign}>
            <Text style={styles.textBtn}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textBottom}>
          <Text style={[
            { fontWeight: 'bold' },
            { fontSize: 18 }
          ]}>HOW WE WORK?</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const buttonStyle = {
  flex: 1,
  height: 50,
  marginHorizontal: 40,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 50,
  backgroundColor: "#E3C000"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 3,
  },
  text1: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  text2: {
    width: "100%",
    flex: 1,
    textAlign: "center",
    marginTop: 70,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 50,
  },
  btnLogin: {
    ...buttonStyle,
  },
  btnSign: {
    ...buttonStyle,
  },
  textBtn: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  textBottom: {
    flex: 2,
    alignItems: "center",
  },
});

export default App;
