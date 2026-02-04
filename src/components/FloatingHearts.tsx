import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: HeartItem[] = [];
      for (let i = 0; i < 12; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: 16 + Math.random() * 16,
          duration: 15 + Math.random() * 10,
          delay: Math.random() * 10,
          opacity: 0.2 + Math.random() * 0.3,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-brown-warm fill-brown-warm"
          style={{
            left: `${heart.x}%`,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animation: `float-up ${heart.duration}s linear ${heart.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
