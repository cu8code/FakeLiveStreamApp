import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export interface Message {
  id: string;
  text: string;
  username: string;
  avatarUrl?: string;
  isVerified?: boolean;
}

interface MessageItemProps {
  message: Message;
}

export const MessageItem = ({ message }: MessageItemProps) => (
  <View style={styles.messageItem}>
    <View style={styles.avatarContainer}>
      <Image
        source={{ uri: message.avatarUrl || 'https://i.pravatar.cc/100' }}
        style={styles.avatar}
        defaultSource={require('../assets/def.png')}
      />
    </View>
    <View style={styles.textContainer}>
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>{message.username}</Text>
      </View>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  messageItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  avatarContainer: {
    marginRight: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  verifiedIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#E0E0E0',
  },
});