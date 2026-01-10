import { Text, View } from "react-native";
import Header from "./components/WelcomePage";
import WelcomePage from "./components/WelcomePage";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {WelcomePage()}
      
    </View>
  );
}
