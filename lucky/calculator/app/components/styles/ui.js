import { Dimensions, StyleSheet } from "react-native";
import { lightColors, darkColors } from "./colors";

const screen = Dimensions.get("window");

export const getStyles = (isDarkMode) => {
  const colorStyles = isDarkMode ? darkColors : lightColors;
  return StyleSheet.compose({
    RowContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 15,
      marginTop: 15,
    },
    topbar: {
      position: "absolute",
      top: 50,
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingHorizontal: 24,
    },
    calculationText: {
      fontSize: 20,
      textAlign: "right",
      marginRight: 50,
      marginBottom: 10,
      color: colorStyles.text_1,
    },
    container: {
      flex: 1,
      backgroundColor: colorStyles.background,
      justifyContent: "flex-end",
    },
    value: {
      color: colorStyles.text_1,
      fontSize: 69,
      textAlign: "right",
      marginRight: 50,
      marginBottom: 10,
      fontWeight: "bold",
    },
    calcBox: {
      backgroundColor: colorStyles.boxColor,
      paddingVertical: 20,
      paddingHorizontal: 24,
      borderTopRightRadius: 33,
      borderTopLeftRadius: 33,
      marginTop: 30,
    },
    button: {
      flex: 1,
      backgroundColor: colorStyles.defaultBtn,
      height: 70,
      width: 70,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "center",
      borderRadius: 200,
    },
    icon: {
      color: colorStyles.text_1,
    },
    text: {
      color: colorStyles.text_1,
      fontSize: 24,
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
    },
    textSecondary: {
      color: colorStyles.text_2,
    },
    buttonDouble: {
      width: screen.width / 2 - 10,
      flex: 0,
      alignItems: "flex-start",
      paddingLeft: 40,
    },
    buttonSecondary: {
      backgroundColor: colorStyles.Btn,
    },
    textAccent: {
      color: colorStyles.text_3,
    },
    buttonAccent: {
      backgroundColor: colorStyles.text_1,
    },
  });
};
