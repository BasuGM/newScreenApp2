// React-Native Imports
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Constants
const windowWidth = Dimensions.get("screen").width;

const SelectCategoryTab = ({ title }) => {
  return (
    <View style={styles.SelectCategoryTab}>
      <Image
        source={{ uri: "https://picsum.photos/id/229/200" }}
        style={{
          height: windowWidth * 0.4,
          width: windowWidth * 0.45,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          marginVertical: 5,
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SelectCategoryTab;

const styles = StyleSheet.create({
  SelectCategoryTab: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.45,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#FFF",
    margin: 5,

    // padding: 10
    // borderWidth: 1,
  },
});
