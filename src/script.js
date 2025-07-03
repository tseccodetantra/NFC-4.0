// script.js

import { useEffect } from "react"

const useTimelineAnimation = (setCurrentStage, totalStages, conceptSelected) => {
  useEffect(() => {
    if (!conceptSelected) return;

    let current = 0;

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < totalStages - 1) {
          current = prev + 1;
          return current;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [conceptSelected, setCurrentStage, totalStages]);
};

export default useTimelineAnimation;
