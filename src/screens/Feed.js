import { ScrollView, View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Community Feed</Text>

      <View style={styles.card}>
        <Text style={styles.user}>@alex_travels</Text>
        <Text style={styles.text}>Tokyo night aesthetic ✨</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.user}>@wander_isha</Text>
        <Text style={styles.text}>Perfect outfit for Shibuya 🧥</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:colors.bg, padding:16 },
  title:{ color:colors.text, fontSize:24, marginBottom:16 },
  card:{ backgroundColor:colors.card, padding:16, borderRadius:16, marginBottom:12 },
  user:{ color:colors.primary, marginBottom:6 },
  text:{ color:colors.text }
});
