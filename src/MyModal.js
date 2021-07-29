import React, {useState} from 'react';
import {View, Text, Button, Modal, StyleSheet} from 'react-native';

const MyModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={handleModal} />

      <Modal
        visible={isOpenModal}
        animationType="fade"
        onShow={() => alert('굿굿굿')}>
        <View style={styles.modalView}>
          <Text>안녕 난 모달이야 ㅋㅋ</Text>
          <Button title="Close Modal" onPress={handleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
  },

  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cecece',
  },
});

export default MyModal;
