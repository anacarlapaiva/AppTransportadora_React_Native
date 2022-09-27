import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

export const Header = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentName}>
          <Feather name="truck" size={22} color="#fff" style={{ marginRight: 15 }} />
          <Text style={styles.userName}>{name}</Text>
        </View>

        <TouchableOpacity style={styles.buttonMenu} activeOpacity={0.9}>
          <Feather name="map-pin" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4591e9",
    padding: 30,
    paddingBottom: 20,
    flexDirection: "row",
  },
  contentName: {
    display: "flex",
    flex: 1,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonMenu: {
    width: 40,
    height: 40,
    justifyContent: "center",
    backgroundColor: 'rgba(171, 211, 224, 0.5)',
    alignItems: "center",
    borderRadius: '50%'
  }
});
