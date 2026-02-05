import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import spacing from "../theme/spacing";

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
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.md,          // ✅ spacing system
  },

  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
    marginBottom: spacing.md,     // ✅
  },

  section: {
    color: colors.text,
    fontSize: 18,
    marginVertical: spacing.sm,   // ✅
  },

  tripCard: {
    backgroundColor: colors.card,
    padding: spacing.md,          // ✅
    borderRadius: spacing.lg,     // ✅
    marginBottom: spacing.sm,     // ✅
  },

  tripTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },

  tripMeta: {
    color: colors.muted,
    marginTop: spacing.xs,        // ✅
  },

  tripStatus: {
    color: colors.primary,
    marginTop: spacing.sm,       
  },
});
