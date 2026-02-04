import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../theme/colors";

export default function Explore() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.sub}>Shibuya • Real-time insights</Text>

      {/* Hero Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Real-time Intelligence</Text>
        <Text style={styles.meta}>Crowd: Medium • Best Time: 4:30 PM</Text>
      </View>

      {/* Trending Section */}
      <Text style={styles.section}>Trending Spots</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Shibuya Crossing</Text>
        <Text style={styles.meta}>Neon night walk • Very popular</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tokyo Tower Gaze</Text>
        <Text style={styles.meta}>Best sunset views</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 16,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "700",
  },
  sub: {
    color: colors.muted,
    marginBottom: 20,
    marginTop: 6,
  },
  section: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  meta: {
    color: colors.muted,
    marginTop: 6,
  },
});