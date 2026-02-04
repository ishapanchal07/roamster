import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../theme/colors";

export default function TripDetail({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tokyo • Day Plan</Text>
      <Text style={styles.sub}>Wednesday, 13 March</Text>

      {/* Morning */}
      <View style={styles.block}>
        <Text style={styles.time}>🌅 Morning</Text>
        <Text style={styles.item}>Shibuya Crossing Walk</Text>
        <Text style={styles.meta}>Low crowd • Best light</Text>
      </View>

      {/* Afternoon */}
      <View style={styles.block}>
        <Text style={styles.time}>☀️ Afternoon</Text>
        <Text style={styles.item}>Ramen Street Lunch</Text>
        <Text style={styles.meta}>Veg-friendly available</Text>
      </View>

      {/* Evening */}
      <View style={styles.block}>
        <Text style={styles.time}>🌆 Evening</Text>
        <Text style={styles.item}>Tokyo Tower View</Text>
        <Text style={styles.meta}>Photo spot suggested</Text>
      </View>

      {/* AI CTA */}
      <View style={styles.aiCard}>
        <Text style={styles.aiText}>AI Wardrobe ready for today</Text>
        <Text
          style={styles.aiLink}
          onPress={() => navigation.navigate("Wardrobe")}
        >
          View Outfit →
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 26, fontWeight: "700" },
  sub: { color: colors.muted, marginBottom: 16 },
  block: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  time: { color: colors.primary, marginBottom: 6 },
  item: { color: colors.text, fontSize: 16 },
  meta: { color: colors.muted, marginTop: 4 },
  aiCard: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
  },
  aiText: { color: colors.text, fontSize: 16 },
  aiLink: { color: colors.primary, marginTop: 8 },
});

