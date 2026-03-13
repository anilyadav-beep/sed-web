import ReactGA from 'react-ga4';

const useAnalyticsEventTracker = (category='SEDEMAC-Corporate') => {
  const eventTracker = (action = 'Default-Action', label = 'Default-Label') => {
    ReactGA.event({category, action, label});
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;