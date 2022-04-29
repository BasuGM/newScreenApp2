// React-Native Imports
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Constants
const windowWidth = Dimensions.get("screen").width;

const TitleTab = ({ title, leftIcon }) => {
  return (
    <View style={styles.TitleTab}>
      <View>
        <Text
          style={{
            marginVertical: 5,
            fontWeight: "bold",
            fontSize: 26,
          }}
        >
          {title}
        </Text>
      </View>
      {leftIcon}
      <View style={styles.OrangeBar} />
    </View>
  );
};

export default TitleTab;

const styles = StyleSheet.create({
  TitleTab: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  OrangeBar: {
    position: "absolute",
    bottom: 0,
    left: 10,
    height: 7,
    width: 60,
    borderRadius: 10,
    backgroundColor: "#f37e2c",
  },
});
