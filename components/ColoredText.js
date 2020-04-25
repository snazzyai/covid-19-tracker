import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const ColoredText = ({
  colorOne,
  colorTwo,
  colorThree,
  fontSize,
  textOne,
  textTwo,
  textThree,
}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.text}>
        <Text style={{ color: `${colorOne}` }}>
          {textOne}
          <Text style={{ color: `${colorTwo}` }}>
            {" "}
            {textTwo}
            <Text style={{ color: `${colorThree}` }}> {textThree}</Text>
          </Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    padding: "10%",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
  },
});

export default ColoredText;
