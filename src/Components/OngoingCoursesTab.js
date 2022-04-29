// React-Native Imports
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

// Constants
const windowWidth = Dimensions.get("screen").width;

const OngoingCoursesTab = ({ title, subtitle, midButton, percent }) => {
  return (
    <View style={styles.OngoingCoursesTab}>
      <View style={styles.OngoingCoursesLeft}>
        <Image
          source={{ uri: "https://picsum.photos/id/236/200" }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
          }}
        />
      </View>

      <View style={styles.OngoingCoursesMid}>
        <Text style={styles.MidTitle}>{title}</Text>
        <Text style={styles.MidSubtitle}>{subtitle}</Text>
        <View style={styles.MidBottomContainer}>
          <FontAwesome name="graduation-cap" size={14} color="black" />
          <Text style={styles.MidBottom}>{midButton}</Text>
        </View>
      </View>

      <View style={styles.OngoingCoursesRight}>
        <View>
          <Text style={styles.RightTop}>{percent + "%"}</Text>
          <Text style={styles.RightBottom}>Complete</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
};

export default OngoingCoursesTab;

const styles = StyleSheet.create({
  OngoingCoursesTab: {
    width: windowWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderTopWidth: 1,
    paddingVertical: 10,
    borderColor: "#e7e7e7",
  },

  // Left
  OngoingCoursesLeft: {},

  // Middle
  OngoingCoursesMid: {
    //   alignItems: 'center',
    //   justifyContent: 'center'
  },
  MidTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  MidSubtitle: {
    color: "#909090",
  },
  MidBottomContainer: {
    backgroundColor: "#f4faff",
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    borderColor: "#d3e5ff",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    flexDirection: "row",
  },
  MidBottom: {
    color: "#909090",
    marginLeft: 5,
  },

  // Right
  OngoingCoursesRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  RightTop: {
    fontSize: 36,
  },
  RightBottom: {},
});
