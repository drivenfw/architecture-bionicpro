module.exports = {
  'realm': 'reports-realm',
  'resource': 'reports-api',
  'enabled': true,
  'auth-server-url': process.env.KEYCLOAK_URL || 'http://localhost:8080',
  'bearer-only': true,
  'ssl-required': 'external',
  'confidential-port': 0,
  'credentials': {
    'secret': process.env.KEYCLOAK_CLIENT_SECRET,
  },
};
