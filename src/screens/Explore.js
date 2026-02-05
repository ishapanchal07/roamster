import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import colors from "../theme/colors";
import spacing from "../theme/spacing";

export default function Explore() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.sub}>Shibuya • Real-time insights</Text>

        {/* Hero Card */}
        <Animated.View entering={FadeInUp.duration(400)}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Real-time Intelligence</Text>
            <Text style={styles.meta}>
              Crowd: Medium • Best Time: 4:30 PM
            </Text>
          </View>
        </Animated.View>

        {/* Trending Section */}
        <Text style={styles.section}>Trending Spots</Text>

        <Animated.View entering={FadeInUp.delay(100).duration(400)}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Shibuya Crossing</Text>
            <Text style={styles.meta}>
              Neon night walk • Very popular
            </Text>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200).duration(400)}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Tokyo Tower Gaze</Text>
            <Text style={styles.meta}>Best sunset views</Text>
          </View>
        </Animated.View>
      </ScrollView>
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
    fontSize: 28,
    fontWeight: "700",
  },

  sub: {
    color: colors.muted,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },

  section: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
    marginVertical: spacing.sm,
  },

  card: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.lg,
    marginBottom: spacing.sm,
  },

  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },

  meta: {
    color: colors.muted,
    marginTop: spacing.xs,
  },
});
