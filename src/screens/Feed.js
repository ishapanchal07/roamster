import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import colors from "../theme/colors";
import spacing from "../theme/spacing";

export default function Feed() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Community Feed</Text>

        {/* Post 1 */}
        <Animated.View entering={FadeInUp.duration(400)}>
          <View style={styles.card}>
            <Text style={styles.user}>@alex_travels</Text>
            <Text style={styles.text}>
              Tokyo night aesthetic ✨
            </Text>
          </View>
        </Animated.View>

        {/* Post 2 */}
        <Animated.View entering={FadeInUp.delay(150).duration(400)}>
          <View style={styles.card}>
            <Text style={styles.user}>@wander_isha</Text>
            <Text style={styles.text}>
              Perfect outfit for Shibuya 🧥
            </Text>
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
    fontSize: 24,
    fontWeight: "700",
    marginBottom: spacing.lg,
  },

  card: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.lg,
    marginBottom: spacing.sm,
  },

  user: {
    color: colors.primary,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },

  text: {
    color: colors.text,
    fontSize: 15,
  },
});
