import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

interface LiveIndicatorProps {
  title: string;
  viewCount: number;
}

// Utility function to format large numbers (e.g., 1000 → 1K, 1000000 → 1M)
const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(Math.floor(num) / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(Math.floor(num) / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const LiveIndicator = ({ title, viewCount }: LiveIndicatorProps) => {
  const navigation = useNavigation(); // Use the useNavigation hook

  return (
    <View style={styles.liveIndicator}>
      <Text style={styles.leftText}>{title}</Text>
      <View style={styles.rightContainer}>
        <View style={styles.liveBackground}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <View style={styles.viewCountBackground}>
          <Ionicons name="eye" size={15} color="white" />
          <Text style={styles.viewCount}>{formatNumber(viewCount)}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  liveIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    zIndex: 1,
    paddingTop: 28,
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  liveBackground: {
    backgroundColor: '#FF0000',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  liveText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewCountBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    gap: 4,
  },
  viewCount: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  closeButton: {
    paddingLeft: 10,
  },
});