import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: "dev-yfy8b7i0.eu.auth0.com",
    clientId: "7EtfUdVnaExY8gUPXS3K8Yv1aJlIriRy",
    redirectUri: window.location.origin,
  }
};