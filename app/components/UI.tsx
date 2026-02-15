// Reusable UI components for the application
import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const COLORS = {
  primary: "#f76c09ff",
  white: "#ffffff",
};

// Props for the reusable Button component
// - Extends all standard TouchableOpacity props
// - Requires children for the button label/content
type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

export default function Button({ children, onPress, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 40,
    alignSelf: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "600",
  },
});
