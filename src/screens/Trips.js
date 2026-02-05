import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import colors from "../theme/colors";
import spacing from "../theme/spacing";

export default function Trips({ navigation }) {
  const trips = []; // future: API data

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      {trips.length === 0 ? (
        /* EMPTY STATE */
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            No trips yet. Start your first journey ✈️
          </Text>
        </View>
      ) : (
        /* TRIPS LIST */
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>My Trips</Text>

          {/* Active Trip */}
          <Animated.View entering={FadeInUp.duration(400)}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.tripCard}
              onPress={() => navigation.navigate("TripDetail")}
            >
              <Text style={styles.tripTitle}>Tokyo Getaway 🇯🇵</Text>
              <Text style={styles.tripMeta}>
                12 Mar – 18 Mar • Solo
              </Text>
              <Text style={styles.tripStatus}>Active</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Upcoming */}
          <Text style={styles.section}>Upcoming</Text>

          <Animated.View entering={FadeInUp.delay(150).duration(400)}>
            <View style={styles.tripCard}>
              <Text style={styles.tripTitle}>Paris Escape 🇫🇷</Text>
              <Text style={styles.tripMeta}>
                5 Apr – 10 Apr
              </Text>
            </View>
          </Animated.View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.md,
  },

  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
    marginBottom: spacing.md,
  },

  section: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
    marginVertical: spacing.sm,
  },

  tripCard: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.lg,
    marginBottom: spacing.sm,
  },

  tripTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },

  tripMeta: {
    color: colors.muted,
    marginTop: spacing.xs,
  },

  tripStatus: {
    color: colors.primary,
    marginTop: spacing.sm,
    fontWeight: "600",
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
  },

  emptyText: {
    color: colors.muted,
    fontSize: 16,
    textAlign: "center",
  },
});
