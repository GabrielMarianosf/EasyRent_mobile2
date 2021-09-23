import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import Email from "./assets/icons/email";
import Senha from "./assets/icons/senha";
import Iris from "./assets/icons/iris";

import email from "./assets/icons/email.svg";

export default function App() {
  const [FontLoad, erro] = useFonts({
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
    "ABeeZee-Italic": require("./assets/fonts/ABeeZee-Italic.ttf"),
  });

  return (
    <View style={styles.fundo}>
      <View style={styles.logo}></View>
      <View style={styles.nav}>
        <Text
          style={{
            fontFamily: "ABeeZee-Regular",
            color: "#fff",
            fontSize: 20,
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: 5, height: 10 },
            textShadowRadius: 10,
            paddingBottom: 30,
          }}
        >
          Sign In
        </Text>
        <View style={styles.view_botao}>
          <View style={{ left: 15, top: 14 }}>
            <Email />
          </View>
          <TextInput
            style={styles.input}
            placeholder="abc@email.com"
          ></TextInput>
        </View>
        <View style={styles.view_botao}>
          <View style={{ left: 17, top: 14 }}>
            <Senha />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Sua Senha"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <Text
          style={{
            top: 6,
            left: 95,
            fontFamily: "ABeeZee-Regular",
            color: "#fff",
            fontSize: 15,
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: 5, height: 10 },
            textShadowRadius: 10,
            paddingTop: 3,
          }}
        >
          Esqueceu sua Senha ?
        </Text>
        <Pressable style={styles.botao} onPress={null}>
          <Text
            style={{
              fontFamily: "ABeeZee-Regular",
              color: "#fff",
              fontSize: 15,
            }}
          >
            Entrar
          </Text>
        </Pressable>
        <Text
          style={{
            top: 15,
            left: 80,
            fontFamily: "ABeeZee-Regular",
            color: "#fff",
            fontSize: 15,
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: 5, height: 10 },
            textShadowRadius: 10,
            paddingTop: 3,
          }}
        >
          Novo Por Aqui ?
        </Text>
        <Pressable style={styles.botao} onPress={null}>
          <Text
            style={{
              fontFamily: "ABeeZee-Regular",
              color: "#fff",
              fontSize: 15,
            }}
          >
            Inscreva-se
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <View style={{ left: -15 }}>
          <Iris />
        </View>
        <Text
          style={{
            top: -40,
            left: 20,
            fontFamily: "ABeeZee-Regular",
            color: "#fff",
            fontSize: 15,
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: 5, height: 10 },
            textShadowRadius: 10,
            paddingTop: 3,
          }}
        >
          Iris Software Studio
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#36393F",
    alignItems: "center",
    justifyContent: "center",
  },
  fonte: {
    fontFamily: "ABeeZee-Regular",
    color: "#fff",
    fontSize: 20,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 5, height: 10 },
    textShadowRadius: 10,
  },
  input: {
    height: 50,
    width: 200,
    left: 50,
    top: -20,
    borderRadius: 10,
    fontFamily: "ABeeZee-Regular",
  },
  view_botao: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    width: 250,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 8,
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    left: 1,
    width: 250,
    height: 50,
    marginTop: 30,
    elevation: 3,
    borderRadius: 40,
    backgroundColor: "#0B8EB7",
  },
  nav: {},
  footer: {
    top: 80,
  },
});
