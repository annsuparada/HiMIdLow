import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location]);
};

export default usePageTracking;
