import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ConfigurableLink } from '@openmrs/esm-framework';

export interface DashboardLinkConfig {
  name: string;
  title: string;
  path: string;
}

export const newWindowRedirect = (url: string): void => {
  window.open(url, '_blank', 'noopener noreferrer');
};

function DashboardLink({ dashboardLinkConfig }: { dashboardLinkConfig: DashboardLinkConfig }) {
  const { t } = useTranslation();
  const { name, path } = dashboardLinkConfig;
  const spaBasePath = `${window.spaBase}/home`;
  const redirectPath = `${window.openmrsBase}/${path}`;
  const className = 'cds--side-nav__link';

  return (
    <ConfigurableLink to={spaBasePath} className={className} onClick={() => newWindowRedirect(redirectPath)}>
      {t(name)}
    </ConfigurableLink>
  );
}

export const createDashboardReportsLink = (dashboardLinkConfig: DashboardLinkConfig) => () => (
  <BrowserRouter>
    <DashboardLink dashboardLinkConfig={dashboardLinkConfig} />
  </BrowserRouter>
);
