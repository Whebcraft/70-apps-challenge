import { Text, TouchableOpacity } from "react-native";
import { getStyles } from "./styles/ui";

export default ({ onPress, text, size, theme, mode }) => {
  const styles = getStyles(mode);

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
