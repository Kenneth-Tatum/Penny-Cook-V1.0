import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "./UI";

// Image asset
const WELCOME_BACKGROUND = require("../../assets/images/chopping-board2.jpg");

// Theme colors
const COLORS = {
  primary: "#f76c09ff", // Orange
  shadowGreen: "rgba(135, 204, 8, 0.75)", // Green shadow
  white: "#ffffff",
};

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      {/* Background image that fills the screen */}
      <ImageBackground
        source={WELCOME_BACKGROUND}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/* Content wrapper for vertical alignment */}
        <View style={styles.contentWrapper}>
          {/* Welcome title */}
          <Text style={styles.title}>
            Welcome{"\n"}to{"\n"}Penny Cook
          </Text>
        </View>
        <View style={styles.buttonWrapperGetStarted}>
          {/* Call-to-action button */}
          <Button>Get Started</Button>
        </View>
        <View style={styles.buttonWrapper}>
          {/* Log button */}
          <Button>Log In</Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container - fills entire screen
  container: {
    flex: 1,
    width: "100%",
  },

  // Background image styling
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  // Content wrapper for centering elements
  contentWrapper: {
    flex: 1,
    marginTop: 60,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },

  // Welcome title text styling
  title: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.primary,
    textShadowColor: COLORS.shadowGreen,
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 15,
    marginTop: 45,
  },

  // Button wrapper styling
  buttonWrapperGetStarted: {
// Bottom margin for spacing between buttons if needed
  },
  buttonWrapper: {
    marginBottom: 40,
  },

  // Start button styling
  startButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 40,
    alignSelf: "center",
  },

  // Button text styling
  buttonText: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "600",
  },
});
