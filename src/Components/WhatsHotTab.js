// React-Native Imports
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

// Styling Imports

// Constants
const windowWidth = Dimensions.get("screen").width;

const WhatsHotTab = () => {
  return (
    <View style={styles.WhatsHotTab}>
      <View style={styles.Top}>
        <View style={styles.LevelButton}>
          <Text style={styles.LevelText}>Level 2</Text>
        </View>
        <Text style={styles.CourseText}>50+ ongoing</Text>
      </View>

      <View style={styles.Mid}>
        <Text style={styles.MidTitle}>SCrom</Text>
        <Text style={styles.MidSubTitle}>Learning</Text>
      </View>

      <View style={styles.Bottom}>
        <Image
          source={{ uri: "https://picsum.photos/id/256/200" }}
          style={{
            height: 120,
            width: 120,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default WhatsHotTab;

const styles = StyleSheet.create({
  WhatsHotTab: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    height: 300,
    width: 240,
    // borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#2571d0",
    elevation: 5,
  },

  // Top
  Top: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  LevelButton: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: 80,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  LevelText: {
    color: "#2571d0",
    fontSize: 16,
  },
  CourseText: {
    color: '#FFF'
  },

  // Mid
  Mid: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  MidTitle: {
    fontSize: 48,
    color: "#FFF",
    fontWeight: "bold",
  },
  MidSubTitle: {
    fontSize: 42,
    color: "#FFF",
    fontWeight: "100",
    // fontWeight: 'bold'
  },

  // Bottom
  Bottom: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
