import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface LiveStreamContextType {
  title: string;
  setTitle: (title: string) => void;
  viewCount: number;
  setViewCount: (count: number) => void;
}

// Create the context
const LiveStreamContext = createContext<LiveStreamContextType | undefined>(undefined);

// Custom hook to use the context
export const useLiveStream = () => {
  const context = useContext(LiveStreamContext);
  if (!context) {
    throw new Error('useLiveStream must be used within a LiveStreamProvider');
  }
  return context;
};

// Provider component
export const LiveStreamProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>('IRL Stream'); // Default title
  const [viewCount, setViewCount] = useState<number>(10000); // Default view count

  return (
    <LiveStreamContext.Provider value={{ title, setTitle, viewCount, setViewCount }}>
      {children}
    </LiveStreamContext.Provider>
  );
};