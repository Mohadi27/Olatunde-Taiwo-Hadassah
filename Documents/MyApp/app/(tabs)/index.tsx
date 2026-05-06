import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
      {/* Updated text with your full name */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Hello! Hadassah Olatunde-Taiwo from GIT class.
      </Text>
      <Text style={{ marginTop: 10 }}>
        Modified by: Praise Oluwaseun Ajayi
      </Text>
    </View>
  );
}
