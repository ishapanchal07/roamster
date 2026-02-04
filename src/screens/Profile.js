import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Alex Sterling</Text>
      <Text style={styles.meta}>Solo Traveler • Explorer</Text>

      <View style={styles.card}>
        <Text style={styles.item}>👕 My Wardrobe</Text>
        <Text style={styles.item}>💳 Wallet</Text>
        <Text style={styles.item}>🧳 Past Trips</Text>
        <Text style={styles.item}>⚙️ Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:colors.bg, padding:16 },
  name:{ color:colors.text, fontSize:26, fontWeight:"700" },
  meta:{ color:colors.muted, marginBottom:16 },
  card:{ backgroundColor:colors.card, padding:16, borderRadius:16 },
  item:{ color:colors.text, paddingVertical:10 }
});
