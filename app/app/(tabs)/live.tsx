import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { LiveIndicator } from '@/components/LiveIndicator';
import { MessageList } from '@/components/MessageList';
import { MessageInput } from '@/components/MessageInput';
import { Message } from '@/components/types';
import { PermissionRequest } from '@/components/PermissionRequest';
import InfiniteEmojiPopper from '@/components/Emojis';
import { useLiveStream } from '@/components/LiveStreamContext';
import { randomTexts, randomUsernames } from '@/components/const-randomtext';

const generateRandomMessage = (): Message => {
  return {
    id: Math.random().toString(),
    text: randomTexts[Math.floor(Math.random() * randomTexts.length)],
    username: randomUsernames[Math.floor(Math.random() * randomUsernames.length)],
    avatarUrl: `https://i.pravatar.cc/100?u=${Math.floor(Math.random() * 100)}`,
    isVerified: Math.random() > 0.5,
  };
};

export const Livestream = () => {
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const {title, viewCount} = useLiveStream();

  const loadMoreMessages = async (): Promise<Message[]> => {
    const newMessages = Array.from({ length: Math.floor(Math.max(1, Math.random() * 10)) }, () => generateRandomMessage());
    setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    return newMessages;
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return <PermissionRequest onRequestPermission={requestPermission} />;
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        <LiveIndicator title={title} viewCount={viewCount}   />
        <MessageList messages={messages} loadMore={loadMoreMessages} />
        <MessageInput message={message} onMessageChange={setMessage} />
        <InfiniteEmojiPopper />
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
});


export default Livestream