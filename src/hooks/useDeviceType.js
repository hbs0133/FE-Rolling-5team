import { useState, useEffect } from "react";

const getDeviceType = ({ isTablet, isMobile, isDesktop }) => {
  if (isTablet) {
    return "tablet";
  } else if (isMobile) {
    return "mobile";
  } else if (isDesktop) {
    return "desktop";
  } else {
    return "unknown";
  }
};

// 기기 타입을 판별하는 함수 정의
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: window.innerWidth <= 767,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 1199,
    isDesktop: window.innerWidth >= 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceType({
        isMobile: window.innerWidth <= 767,
        isTablet: window.innerWidth >= 768 && window.innerWidth <= 1199,
        isDesktop: window.innerWidth >= 1200,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return getDeviceType(deviceType);
};

export default useDeviceType;
