import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Message } from './types';
import { MessageItem } from './MessageItem';

interface MessageListProps {
  messages: Message[];
  loadMore: () => Promise<Message[]>;
  onLoadError?: (error: Error) => void;
  maxRenderSize?: number;
}

export const MessageList = ({
  messages: initialMessages,
  loadMore,
  onLoadError,
  maxRenderSize = 50,
}: MessageListProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleLoadMore = useCallback(async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const newMessages = await loadMore();

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, ...newMessages];
        if (updatedMessages.length > maxRenderSize) {
          return updatedMessages.slice(-maxRenderSize);
        }
        return updatedMessages;
      });
    } catch (error) {
      onLoadError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, loadMore, onLoadError, maxRenderSize]);

  useEffect(() => {
    const interval = setInterval(handleLoadMore, 2000);
    return () => clearInterval(interval);
  }, [handleLoadMore]);

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  };

  const renderItem = useCallback(({ item }: { item: Message }) => (
    <MessageItem message={item} />
  ), []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        windowSize={21}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    maxHeight: '30%',
    overflow: 'hidden',
  },
  messageList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexGrow: 1,
  },
  loaderContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});