import { useEffect, useState } from "react";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.5;
      const animationDuration = Math.random() * 4 + 2;

      newStars.push({
        id: i,
        size,
        x,
        y,
        opacity,
        animationDuration,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 20;
      const opacity = Math.random() * 0.5 + 0.5;
      const animationDuration = Math.random() * 3 + 3;
      const animationDelay = Math.random() * 2; // Random delay for meteors

      newMeteors.push({
        id: i,
        size,
        x,
        y,
        opacity,
        animationDuration,
        animationDelay, // Add the delay here
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.animationDuration}s`,
            opacity: star.opacity,
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          className="star animate-pulse-subtle"
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            width: `${meteor.size * 40}px`,
            height: `${meteor.size * 1}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
          className="meteor animate-meteor"
        />
      ))}
    </div>
  );
};

export default StarsBackground;
