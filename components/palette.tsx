import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const colorDefault = "#85786C";

const Palette = ({ setColorCard, setIsDelete }: any) => {
  const [color, setColor] = useState(colorDefault);
  const [modalVisible, setModalVisible] = useState(false);
  const [current, setCurrent] = useState("paint");

  const openModal = () => {
    setIsDelete(false);
    setCurrent("paint");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const selectColor = (selectedColor: string) => {
    setColor(selectedColor);
    setColorCard(selectedColor);
    setModalVisible(false);
  };

  const changeColor = () => {
    setColorCard(colorDefault);
    setColor(colorDefault);
    setIsDelete(false);
    setCurrent("reset");
  };

  const deleteCard = () => {
    setColorCard(colorDefault);
    setColor(colorDefault);
    setIsDelete(true);
    setCurrent("delete");
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={[styles.circular, current === "paint" && styles.activeButton]}
        onPress={openModal}
      >
        <FontAwesome name="paint-brush" size={24} color={color} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.circular, current === "reset" && styles.activeButton]}
        onPress={changeColor}
      >
        <MaterialIcons name="touch-app" size={24} color={current === "reset" ? "white" : "lightgrey"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.circular, current === "delete" && styles.activeButton]}
        onPress={deleteCard}
      >
        <MaterialIcons name="delete" size={24} color={current === "delete" ? "white" : "lightgrey"} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleziona un colore</Text>
            <View style={styles.colorOptions}>
              {['#FF474C', '#2b1df0', '#272727', '#85786C'].map((clr) => (
                <TouchableOpacity
                  key={clr}
                  style={[styles.colorButton, { backgroundColor: clr }]}
                  onPress={() => selectColor(clr)}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Chiudi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Palette;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    height: 80,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 50,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  circular: {
    backgroundColor: '#F5F5F5',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  activeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  closeButton: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'black',
  },
});
