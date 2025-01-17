import { TouchableOpacity, Dimensions } from "react-native";
import { ICON_SIZE, THEME } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddTodoCallToAction() {
  const { height } = Dimensions.get("window");
  return (
    <TouchableOpacity
      style={{
        width: ICON_SIZE * 1.7,
        height: ICON_SIZE * 1.7,
        backgroundColor: THEME.pallete.primary,
        borderRadius: "100%",
        position: "fixed",
        top: height * 0.8,
        right: 8,
      }}
      className="shadow-lg flex items-center justify-center"
    >
      <MaterialIcons size={ICON_SIZE} color="white" name="add" />
    </TouchableOpacity>
  );
}
