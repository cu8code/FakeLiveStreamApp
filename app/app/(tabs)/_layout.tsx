import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Ensure the correct icon library is imported
import { LiveStreamProvider } from '@/components/LiveStreamContext';

export default function TabLayout() {
  return (
    <LiveStreamProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#4ECDC4',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="live"
          options={{
            title: 'Live',
            tabBarIcon: ({ color }) => <Ionicons name="play" size={28} color={color} />,
            tabBarStyle: { display: 'none' },
          }}
        />
      </Tabs>
    </LiveStreamProvider>
  );
}