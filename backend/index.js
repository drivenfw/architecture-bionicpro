const express = require('express');
const cors = require('cors');
const Keycloak = require('keycloak-connect');
const keycloakConf = require('./keycloak.config.js');
const generateReport = require('./report');

const app = express();

app.use(cors({
  origin: ['http://localhost:3000']
}));

const keycloak = new Keycloak({}, keycloakConf);
app.use(keycloak.middleware());

app.get('/reports', keycloak.protect('realm:prothetic_user'), (req, res) => {
  const filename = 'bionicpro_report.csv';
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(generateReport());
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Starting on http://localhost:${PORT}`);
});
