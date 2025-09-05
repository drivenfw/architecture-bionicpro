const express = require('express');
const cors = require('cors');
const app = express();

const reportHeader = 'Телеметрия BionicPRO';
const columns = ['протез', 'число ошибок'];
const rows = [
  ['рука', '50'],
  ['нога', '20'],
  ['глаз', '10'],
];

function generateCsv() {
  let result = reportHeader + '\r\n';
  result += columns.join(',') + '\r\n';
  for (const r of rows) {
    result += r.join(',') + '\r\n';
  }
  return result;
}

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.get('/reports', (req, res) => {
  const filename = 'bionicpro_report.csv';
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(generateCsv());
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log('Starting on http://localhost:${PORT}');
});