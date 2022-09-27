import React, { useState } from 'react'
import { View, StyleSheet, Modal, FlatList, Button } from 'react-native'
import { ButtonComponent } from '../../components/Button'
import { Order } from '../../components/Order'

export const ModalComponent = () => {
  const [visible, setVisible] = useState(false)
  const list = [
    {
      id: 1,
      label: 'Mouse gamer',
      value: 'Não entregue',
      date: '26/08/2022',
      type: 1,
    },
    {
      id: 2,
      label: 'Teclado gamer',
      value: 'Não entregue',
      date: '22/09/2022',
      type: 1,
    },
    {
      id: 3,
      label: 'Monitor LCD',
      value: 'Entregue',
      date: '05/08/2022',
      type: 0,
    },
  ]

  return (
    <View style={styles.content}>
      <Modal
        animationType="fade"
        visible={visible}
      >
        <View style={styles.contentModal}>
          <View style={styles.modal}>

            <Button title="Fechar" onPress={() => { setVisible(false) }} />
            <FlatList sytle={styles.list}
              data={list}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <Order data={item} />}
            />
          </View>
        </View>
      </Modal>
      <ButtonComponent
        style={styles.buttonModal}
        labelButton="Localizar compra"
        onPress={() => { setVisible(true) }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
  },
  contentModal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonModal: {
    marginTop: 30,
    width: '75%',
    backgroundColor: '#a7c6da',
    padding: 15,
    borderRadius: 8,
  },
  modal: {
    backgroundColor: '#a7c6da',
    margin: 20,
    padding: 20,
    borderRadius: 8,
    elevation: 10,
    height: '60%',
  }
})

