import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface PermissionRequestProps {
  onRequestPermission: () => void;
}

export const PermissionRequest = ({ onRequestPermission }: PermissionRequestProps) => (
  <View style={styles.container}>
    <Text style={styles.message}>We need your permission to show the camera</Text>
    <Button onPress={onRequestPermission} title="Grant Permission" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
});