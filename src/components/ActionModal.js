import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

export default function ActionModal({ onClose }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>Quick Actions</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>➕ Start New Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>👕 Add Outfit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>📸 Create Memory</Text>
        </TouchableOpacity>

        <Text onPress={onClose} style={styles.close}>Close</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay:{ flex:1, justifyContent:"flex-end", backgroundColor:"rgba(0,0,0,0.6)"},
  modal:{ backgroundColor:colors.card, padding:20, borderTopLeftRadius:24, borderTopRightRadius:24},
  title:{ color:colors.text, fontSize:18, marginBottom:12},
  item:{ paddingVertical:12},
  text:{ color:colors.text, fontSize:16},
  close:{ color:colors.primary, textAlign:"center", marginTop:10}
});
