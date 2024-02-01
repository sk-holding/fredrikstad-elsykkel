import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Check if window is available before adding event listener
    if (typeof window !== 'undefined') {
      // Trigger handleResize initially
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array means the effect runs only once after the initial render

  return screenSize;
};

export default useScreenSize;