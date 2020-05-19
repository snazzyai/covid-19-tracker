import * as React from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

const SkipButton = ({ onPressSkipButton, buttonColor }) => {
  return (
    <View style={styles.skipView}>
      <TouchableOpacity style={styles.button} onPress={onPressSkipButton}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  skipView: {
    alignItems: "center",
  },
  button: {
    width: 180,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: "30%",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 18,
    color: "#fff",
    opacity: 0.75,
  },
});

export default SkipButton;
