import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../theme/colors";

export default function Wardrobe() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AI Wardrobe</Text>
      <Text style={styles.sub}>Tokyo • Modernity</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cyberpunk Techwear</Text>
        <Text style={styles.meta}>
          Weather-ready • Culture-safe
        </Text>
        <Text style={styles.price}>Rent ₹1200</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Harajuku Pastel</Text>
        <Text style={styles.meta}>Aesthetic priority</Text>
        <Text style={styles.price}>Buy ₹3500</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 26, fontWeight: "700" },
  sub: { color: colors.muted, marginBottom: 16 },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  cardTitle: { color: colors.text, fontSize: 16 },
  meta: { color: colors.muted, marginVertical: 6 },
  price: { color: colors.primary, fontWeight: "600" },
});
