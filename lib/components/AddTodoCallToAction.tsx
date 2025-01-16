import { TouchableOpacity, Dimensions } from "react-native";
import { iconSize, theme } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddTodoCallToAction() {
  const { height } = Dimensions.get("window");
  return (
    <TouchableOpacity
      style={{
        width: iconSize * 1.7,
        height: iconSize * 1.7,
        backgroundColor: theme.pallete.primary,
        borderRadius: "100%",
        position: "fixed",
        top: height * 0.8,
        right: 8,
      }}
      className="shadow-lg flex items-center justify-center"
    >
      <MaterialIcons size={iconSize} color="white" name="add" />
    </TouchableOpacity>
  );
}
