import React, { useEffect, useState, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions, Text } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const EMOJI_LIST = ['🎉', '⭐️', '❤️'];
const BASE_BOTTOM_MARGIN = 100;
const HORIZONTAL_PADDING = 100;

interface EmojiParticle {
  id: number;
  animation: Animated.Value;
  startX: number;
  emoji: string;
}

const InfiniteEmojiPopper: React.FC<{ particlesPerSecond?: number }> = ({
  particlesPerSecond = 5,
}) => {
  const [particles, setParticles] = useState<EmojiParticle[]>([]);
  const isPausedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationsRef = useRef<{ [key: number]: Animated.CompositeAnimation }>({});

  const createParticle = (): EmojiParticle => ({
    id: Date.now() + Math.random(),
    animation: new Animated.Value(0),
    startX: HORIZONTAL_PADDING + Math.random() * (SCREEN_WIDTH - HORIZONTAL_PADDING * 2),
    emoji: EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)],
  });

  const animateParticle = (particle: EmojiParticle) => {
    const animation = Animated.timing(particle.animation, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    });

    animationsRef.current[particle.id] = animation;

    animation.start(() => {
      setParticles((current) => current.filter((p) => p.id !== particle.id));
      delete animationsRef.current[particle.id];
    });
  };

  const scheduleRandomPause = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const pauseDuration = 1000 + Math.random() * 2000;

    isPausedRef.current = true;
    timeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      scheduleRandomPause();
    }, pauseDuration);
  };

  const addNewParticles = () => {
    if (isPausedRef.current) {
      const newParticle = createParticle();
      setParticles((current) => [...current, newParticle]);
      animateParticle(newParticle);
      return;
    }

    const particlesToAdd = Math.max(
      1,
      Math.round(particlesPerSecond * (0.8 + Math.random() * 0.2))
    );

    for (let i = 0; i < particlesToAdd; i++) {
      setTimeout(() => {
        const newParticle = createParticle();
        setParticles((current) => [...current, newParticle]);
        animateParticle(newParticle);
      }, i * 100);
    }
  };

  useEffect(() => {
    scheduleRandomPause();
    const interval = setInterval(addNewParticles, 1000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      Object.values(animationsRef.current).forEach((animation) => {
        animation.stop();
      });
    };
  }, [particlesPerSecond]);

  return (
    <View style={styles.container}>
      {particles.map((particle) => {
        const translateY = particle.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [SCREEN_HEIGHT - BASE_BOTTOM_MARGIN, SCREEN_HEIGHT * 0.2],
        });

        const scale = particle.animation.interpolate({
          inputRange: [0, 0.3, 1],
          outputRange: [1.2, 1, 0.5],
        });

        const opacity = particle.animation.interpolate({
          inputRange: [0, 0.7, 1],
          outputRange: [1, 1, 0],
        });

        return (
          <Animated.Text
            key={particle.id}
            style={[
              styles.emoji,
              {
                left: particle.startX,
                transform: [
                  { translateY },
                  { scale },
                ],
                opacity,
              },
            ]}
          >
            {particle.emoji}
          </Animated.Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  emoji: {
    position: 'absolute',
    fontSize: 35,
    textAlign: 'center',
    width: 50,
  },
});

export default InfiniteEmojiPopper;