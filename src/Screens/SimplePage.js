// React-Native Imports
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

// Styling Imports
import {
  Entypo,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Local Components
import SelectCategoryTab from "../Components/SelectCategoryTab";
import TitleTab from "../Components/TitleTab";
import OngoingCoursesTab from "../Components/OngoingCoursesTab";
import WhatsHotTab from "../Components/WhatsHotTab";

// Constants
const windowWidth = Dimensions.get("screen").width;

// Data
const SelectCategoryData = [
  "My Learning",
  "Course Catalogue",
  "Live Session",
  "Customer Training",
  "My Whitelist",
  "Knowledge Base",
];

export default function SimplePage() {
  // Intro Tab
  const IntroTab = () => {
    return (
      <View style={styles.IntroTab}>
        <View style={styles.IntroTabLeft}>
          <Text style={styles.Name}>Hi John!</Text>
          <View style={styles.IconC}>
            <View style={styles.IconTitle}>
              <MaterialCommunityIcons
                name="certificate"
                size={16}
                color="#a1a7bb"
              />
              <Text >12 courses done</Text>
            </View>
            <View style={styles.IconTitle}>
              <AntDesign style={{margin: 2}} name="download" size={16} color="#a1a7bb" />
              <Text>4 ongoing courses</Text>
            </View>
          </View>
        </View>
        <View style={styles.IntroTabRight}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/34.jpg" }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    );
  };

  // Select Category
  const SelectCategory = () => {
    const renderItem = ({ item }) => {
      return <SelectCategoryTab title={item} />;
    };

    return (
      <View>
        <TitleTab
          title="Select category"
          leftIcon={<Entypo name="bell" size={24} color="black" />}
        />
        <FlatList
          data={SelectCategoryData}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };

  // Whats Hot
  const WhatsHot = () => {
    return (
      <View>
        <TitleTab
          title="Whats Hot"
          leftIcon={<Ionicons name="filter" size={24} color="black" />}
        />

        <ScrollView horizontal>
          <WhatsHotTab />
          <WhatsHotTab />
          <WhatsHotTab />
        </ScrollView>
      </View>
    );
  };

  // Ongoing Courses
  const OngoingCourses = () => {
    return (
      <View>
        <TitleTab
          title="Ongoing Courses"
          leftIcon={<AntDesign name="right" size={24} color="black" />}
        />
        <OngoingCoursesTab
          title="Internet Of Things"
          subtitle="Credits can come here"
          midButton="Classroom Training"
          percent="92"
        />
        <OngoingCoursesTab
          title="Internet Of Things"
          subtitle="Credits can come here"
          midButton="Classroom Training"
          percent="92"
        />
        <OngoingCoursesTab
          title="Internet Of Things"
          subtitle="Credits can come here"
          midButton="Classroom Training"
          percent="92"
        />
      </View>
    );
  };

  // Main Render
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <IntroTab />
        <SelectCategory />
        <WhatsHot />
        <OngoingCourses />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 30,
  },
  ScrollView: {
    // paddingVertical: 30,
  },

  IntroTab: {
    flexDirection: "row",
    width: windowWidth,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  IntroTabLeft: {},
  IntroTabRight: {},
  IconC: { flexDirection: "row", marginTop: 10 },
  Name: { fontSize: 28, marginTop: 10 },
  IconTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
});
