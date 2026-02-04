import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

export default function Trips({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Trips</Text>

      {/* Active Trip */}
      <TouchableOpacity
        style={styles.tripCard}
        onPress={() => navigation.navigate("TripDetail")}
      >
        <Text style={styles.tripTitle}>Tokyo Getaway 🇯🇵</Text>
        <Text style={styles.tripMeta}>12 Mar – 18 Mar • Solo</Text>
        <Text style={styles.tripStatus}>Active</Text>
      </TouchableOpacity>

      {/* Upcoming */}
      <Text style={styles.section}>Upcoming</Text>
      <View style={styles.tripCard}>
        <Text style={styles.tripTitle}>Paris Escape 🇫🇷</Text>
        <Text style={styles.tripMeta}>5 Apr – 10 Apr</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: colors.text, fontSize: 26, fontWeight: "700", marginBottom: 16 },
  section: { color: colors.text, fontSize: 18, marginVertical: 12 },
  tripCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
  },
  tripTitle: { color: colors.text, fontSize: 18, fontWeight: "600" },
  tripMeta: { color: colors.muted, marginTop: 6 },
  tripStatus: { color: colors.primary, marginTop: 8 },
});
