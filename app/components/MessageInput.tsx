import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MessageInputProps {
  message: string;
  onMessageChange: (text: string) => void;
}

export const MessageInput = ({ message, onMessageChange }: MessageInputProps) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Type your message..."
      placeholderTextColor="lightgray"
      value={message}
      onChangeText={onMessageChange}
    />
    <Ionicons 
      name="heart-outline" 
      size={32} 
      color="rgba(255, 255, 255, 0.5)" 
      style={styles.icon} 
    />
    <Ionicons 
      name="send-outline" 
      size={32} 
      color="rgba(255, 255, 255, 0.5)" 
      style={styles.icon} 
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E2E2E', // Dark background for the input container
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF', // White text for input
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  icon: {
    marginLeft: 12, // Spacing between icons and input
  },
});