import { View, TouchableOpacity, Text } from "react-native";
import colors from "../theme/colors";

export default function FloatingButton() {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        backgroundColor: colors.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 30 }}>+</Text>
    </TouchableOpacity>
  );
}
