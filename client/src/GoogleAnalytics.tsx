import { useEffect } from 'react';
import ReactGA from 'react-ga';

const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

const GoogleAnalytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.warn('Running Google Analytics', trackingId)
    } else {
      console.warn('Google Analytics is not initialized. Environment:', process.env.NODE_ENV);
    }
  }, []);

  return null;
};

export default GoogleAnalytics;
