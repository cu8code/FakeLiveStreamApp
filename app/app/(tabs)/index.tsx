import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Expo Icons
import { useLiveStream } from '@/components/LiveStreamContext'; // Import the context hook

export default function HomeScreen() {
  const { title, viewCount, setTitle, setViewCount } = useLiveStream(); // Access global state
  const [newTitle, setNewTitle] = useState(title);
  const [newViewCount, setNewViewCount] = useState(viewCount.toString());

  const handleSaveSettings = () => {
    setTitle(newTitle);
    setViewCount(Number(newViewCount));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <View style={styles.card}>
        <Text style={styles.heroTitle}>
          Prank Live Stream App
        </Text>
        <Text style={styles.heroSubtitle}>
          Create fake live streams to prank your friends and have a fun time.
        </Text>
      </View>

      {/* Settings Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Settings
        </Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Title</Text>
          <TextInput
            style={styles.input}
            value={newTitle}
            onChangeText={setNewTitle}
            placeholder="Enter a new title"
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>View Count</Text>
          <TextInput
            style={styles.input}
            value={newViewCount}
            onChangeText={setNewViewCount}
            placeholder="Enter a new view count"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveSettings}>
          <Text style={styles.saveButtonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Disclaimer Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Disclaimer
        </Text>
        <Text style={styles.disclaimerText}>
          PrankLiveStreamApp allows users to create fake-looking live streams to prank their friends. We do not take responsibility for the content broadcasted by users. Please use this app responsibly and respect community guidelines.
        </Text>
        <View style={styles.disclaimerIcon}>
          <Ionicons name="warning" size={24} color="#FF6B6B" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF', // White background
    paddingTop: 48,
  },
  card: {
    backgroundColor: '#F5F5F5', // Light gray background for cards
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4ECDC4', // Black text
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#555555', // Dark gray text
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ECDC4', // Teal color for section titles
    marginBottom: 16,
  },
  settingItem: {
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: '#000000', // Black text
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#000000', // Black text
    borderWidth: 1,
    borderColor: '#E0E0E0', // Light gray border
  },
  saveButton: {
    backgroundColor: '#4ECDC4', // Teal background
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
  disclaimerText: {
    fontSize: 14,
    color: '#555555', // Dark gray text
    lineHeight: 20,
  },
  disclaimerIcon: {
    alignItems: 'center',
    marginTop: 12,
  },
});
