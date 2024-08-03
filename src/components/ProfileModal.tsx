import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <View style={styles.modalContainer}>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default ProfileModal;
