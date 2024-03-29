import React, { useMemo } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ConfigurableLink } from '@openmrs/esm-framework';
import { useTranslation } from 'react-i18next';

export interface DashboardLinkConfig {
  name: string;
  title: string;
  highlight?: boolean;
}

const DashboardLink = ({ dashboardLinkConfig }: { dashboardLinkConfig: DashboardLinkConfig }) => {
  const { t } = useTranslation();
  const { name, highlight } = dashboardLinkConfig;
  const location = useLocation();
  const spaBasePath = `${window.spaBase}/home`;

  const navLink = useMemo(() => {
    const pathArray = location.pathname.split('/');
    const lastElement = pathArray[pathArray.length - 1];
    return decodeURIComponent(lastElement);
  }, [location.pathname]);

  return (
    <ConfigurableLink
      to={spaBasePath}
      className={`cds--side-nav__link ${navLink === 'home' && highlight && 'active-left-nav-link'}`}
    >
      {/* t('Home', 'Home') */}
      {t(name)}
    </ConfigurableLink>
  );
};

export const createDashboardLink = (dashboardLinkConfig: DashboardLinkConfig) => {
  return () => (
    <BrowserRouter>
      <DashboardLink dashboardLinkConfig={dashboardLinkConfig} />
    </BrowserRouter>
  );
};
