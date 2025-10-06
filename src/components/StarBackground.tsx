import { useEffect, useState } from "react";
import type { Star } from "./types/star";
import type { Meteor } from "./types/meteor"

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleRezise = () => {
      generateStars();
    };

    window.addEventListener('resize', handleRezise)

    return () => window.removeEventListener("resize", handleRezise)
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars: Star[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {

    const numberOfMeteors = 4
    const newMeteors:Meteor[] = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star: Star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor: Meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            opacity: meteor.opacity,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

// import React from 'react';

// type Star = {
//   id: string | number;
//   size: number;
//   x: number;
//   y: number;
//   opacity: number;
//   animationDuration: number;
// };

// type StarFieldProps = {
//   stars: Star[];
// };

// const StarField: React.FC<StarFieldProps> = ({ stars }) => {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//             opacity: star.opacity,
//             animationDuration: `${star.animationDuration}s`,
//             position: 'absolute',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarField;
