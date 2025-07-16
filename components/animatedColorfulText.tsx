import React from 'react';

const AnimatedColorfulText = ({text}:{text:string}) => {
    return (
        <>
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text select-none"
                style={{
                    backgroundImage: `
              radial-gradient(circle at 20% 50%, #ff006e 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #8338ec 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, #3a86ff 0%, transparent 50%),
              radial-gradient(circle at 60% 30%, #06ffa5 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, #ffbe0b 0%, transparent 50%),
              radial-gradient(circle at 10% 90%, #ff4081 0%, transparent 50%),
              radial-gradient(circle at 70% 10%, #00bcd4 0%, transparent 50%),
              linear-gradient(45deg, #e91e63, #9c27b0, #3f51b5, #2196f3, #00bcd4, #4caf50, #ffeb3b, #ff9800)
            `,
                    backgroundSize: '200% 200%, 150% 150%, 180% 180%, 160% 160%, 140% 140%, 170% 170%, 190% 190%, 300% 300%',
                    animation: `
              color-dance-1 8s ease-in-out infinite,
              color-dance-2 15s ease-in-out infinite reverse,
              color-dance-3 27s ease-in-out infinite
            `
                }}>
                {text}
            </h1>

            <style>{`
        @keyframes color-dance-1 {
          0%, 100% { 
            background-position: 0% 0%, 100% 100%, 50% 50%, 75% 25%, 25% 75%, 90% 10%, 10% 90%, 0% 0%;
            filter: hue-rotate(0deg) saturate(1);
          }
          25% { 
            background-position: 100% 50%, 0% 50%, 80% 20%, 20% 80%, 60% 40%, 40% 60%, 70% 30%, 50% 50%;
            filter: hue-rotate(90deg) saturate(1.2);
          }
          50% { 
            background-position: 50% 100%, 50% 0%, 30% 70%, 70% 30%, 85% 15%, 15% 85%, 95% 5%, 100% 100%;
            filter: hue-rotate(180deg) saturate(0.8);
          }
          75% { 
            background-position: 0% 50%, 100% 50%, 60% 40%, 40% 60%, 20% 80%, 80% 20%, 30% 70%, 150% 150%;
            filter: hue-rotate(270deg) saturate(1.1);
          }
        }
        
        @keyframes color-dance-2 {
          0%, 100% { 
            background-position: 50% 50%, 25% 75%, 75% 25%, 90% 10%, 10% 90%, 60% 40%, 40% 60%, 0% 100%;
          }
          33% { 
            background-position: 80% 20%, 60% 40%, 40% 60%, 20% 80%, 85% 15%, 15% 85%, 95% 5%, 100% 0%;
          }
          66% { 
            background-position: 20% 80%, 90% 10%, 10% 90%, 70% 30%, 30% 70%, 75% 25%, 25% 75%, 200% 200%;
          }
        }
        
        @keyframes color-dance-3 {
          0%, 100% { 
            background-position: 25% 25%, 75% 75%, 60% 40%, 40% 60%, 80% 20%, 20% 80%, 50% 50%, 100% 0%;
          }
          20% { 
            background-position: 70% 30%, 30% 70%, 85% 15%, 15% 85%, 45% 55%, 55% 45%, 90% 10%, 150% 50%;
          }
          40% { 
            background-position: 90% 10%, 10% 90%, 35% 65%, 65% 35%, 75% 25%, 25% 75%, 40% 60%, 200% 100%;
          }
          60% { 
            background-position: 40% 60%, 60% 40%, 80% 20%, 20% 80%, 55% 45%, 45% 55%, 85% 15%, 50% 150%;
          }
          80% { 
            background-position: 15% 85%, 85% 15%, 70% 30%, 30% 70%, 95% 5%, 5% 95%, 25% 75%, 0% 200%;
          }
        }
      `}</style>
        </>
    );
};

export default AnimatedColorfulText;