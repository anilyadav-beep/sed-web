import React, { useEffect } from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import ReactGA from 'react-ga4';
import BreadcrumbsNav from 'common/BreadcrumbsNav';
const TRACKING_ID = 'G-NCK69SJ0GJ'; // 287622751 SEDEMAC-REACT-GA4
ReactGA.initialize(TRACKING_ID);

const Routes = () => {
  useEffect(() => {
    var page = window.location.pathname.split('/').pop();
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
      title: page,
    });
  }, []);
  return (
    <div>
      {/* <BreadcrumbsNav /> */}
      <ReactRoutes>
        {viewsRoutes.map((item, i) => (
          <Route key={i} path={item.path} element={item.renderer()} />
        ))}
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </ReactRoutes>
    </div>
  );
};
export default Routes;
