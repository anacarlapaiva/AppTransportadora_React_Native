import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Acesse nossas redes sociais</Text>

      <View style={styles.contentBlock}>
        <Feather name="instagram" color="white" style={{ marginRight: 15 }} size={20} />
        <Feather name="facebook" color="white" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4591e9",
    padding: 20,
    paddingBottom: 20,
    flexDirection: "column",
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: "#fff"
  },
  contentBlock: {
    marginTop: 5,
    flexDirection: 'row'
  }
});