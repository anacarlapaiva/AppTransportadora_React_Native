import { View, StyleSheet, Text, FlatList } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalComponent } from '../../components/Modal'
import { Box } from '../../components/Box'

export const Home = () => {


  return (
    <View>
      <Header name="Ana Carla" />
      <View style={styles.container}>
        <Text style={styles.title}>Transportadora Positivo</Text>
        <Box title="Deseja visualizar compra?" description="Clique no botão abaixo para localizar sua ultima compra" />
        <ModalComponent />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '80%',
    paddingTop: 15,
  },
  title: {
    fontSize: 24,
    color: '#4591e9',
    marginBottom: 25,
  }
})