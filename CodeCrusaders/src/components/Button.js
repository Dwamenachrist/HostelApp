import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

export default function Button({ mode, style, children, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined"
          ? { backgroundColor: theme.colors.surface, borderColor: theme.colors.primary } // Surface background for outlined
          : { backgroundColor: theme.colors.primary }, // Primary background for contained
        style,
      ]}
      labelStyle={[
        styles.text,
        mode === "outlined" && { color: "black" }, // Black text for outlined
      ]}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "white", // Default white text for contained
  },
});
