import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";

import { getStyles } from "./app/components/styles/ui";

import { Text, View, TouchableOpacity, Alert } from "react-native";

import Button from "./app/components/Button";

import calculator, { initialState } from "./app/functions/calculator";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = getStyles(isDarkMode);

  const [state, setState] = useState(initialState);

  const KeyPressed = (type, value) => {
    setState((prevState) => calculator(type, value, prevState));
  };

  const About = () => {
    Alert.alert("Calculator App", "App Made for 70 Apps Challange 🚀", [
      { text: "Ok", style: "cancel" },
    ]);
  };

  return (
    <>
      <StatusBar style={isDarkMode ? "light" : "dark"} />

      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={toggleDarkMode}>
            {isDarkMode ? (
              <FontAwesome name="moon-o" size={34} style={styles.icon} />
            ) : (
              <Entypo name="light-up" size={34} style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.calculationText}>
          {state.previousValue
            ? `${state.previousValue} ${state.operator} ${
                state.currentValue === "0" ? "" : state.currentValue
              }`
            : ""}
        </Text>
        <Text style={styles.value}>
          {state.currentValue === ""
            ? parseFloat(state.previousValue).toLocaleString()
            : parseFloat(state.currentValue).toLocaleString()}
        </Text>
        <View style={styles.calcBox}>
          <View style={styles.RowContainer}>
            <Button
              text="AC"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("clear")}
            />

            <Button
              text="+/-"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("posneg")}
            />

            <Button
              text="%"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("percentage")}
            />

            <Button
              text="/"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("operator", "/")}
            />
          </View>

          <View style={styles.RowContainer}>
            <Button
              text="7"
              mode={isDarkMode}
              onPress={() => KeyPressed("number", 7)}
            />
            <Button
              mode={isDarkMode}
              text="8"
              onPress={() => KeyPressed("number", 8)}
            />
            <Button
              mode={isDarkMode}
              text="9"
              onPress={() => KeyPressed("number", 9)}
            />
            <Button
              text="X"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("operator", "*")}
            />
          </View>

          <View style={styles.RowContainer}>
            <Button
              mode={isDarkMode}
              text="4"
              onPress={() => KeyPressed("number", 4)}
            />
            <Button
              mode={isDarkMode}
              text="5"
              onPress={() => KeyPressed("number", 5)}
            />
            <Button
              mode={isDarkMode}
              text="6"
              onPress={() => KeyPressed("number", 6)}
            />
            <Button
              text="--"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("operator", "-")}
            />
          </View>

          <View style={styles.RowContainer}>
            <Button
              text="1"
              mode={isDarkMode}
              onPress={() => KeyPressed("number", 1)}
            />
            <Button
              text="2"
              mode={isDarkMode}
              onPress={() => KeyPressed("number", 2)}
            />
            <Button
              text="3"
              mode={isDarkMode}
              onPress={() => KeyPressed("number", 3)}
            />
            <Button
              text="+"
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("operator", "+")}
            />
          </View>

          <View style={styles.RowContainer}>
            <Button
              text={
                <Ionicons name="rocket-outline" size={24} style={styles.icon} />
              }
              mode={isDarkMode}
              onPress={About}
            />
            <Button
              text="0"
              mode={isDarkMode}
              onPress={() => KeyPressed("number", 0)}
            />
            <Button
              text="."
              mode={isDarkMode}
              onPress={() => KeyPressed("number", ".")}
            />
            <Button
              text="="
              theme="accent"
              mode={isDarkMode}
              onPress={() => KeyPressed("equal", "=")}
            />
          </View>
        </View>
      </View>
    </>
  );
}
