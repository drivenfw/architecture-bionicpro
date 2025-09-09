function generateReport() {
  console.log('Generating report');

  const reportHeader = 'Телеметрия BionicPRO';
  const columns = ['протез', 'число ошибок'];
  const rows = [
    ['рука', '50'],
    ['нога', '20'],
    ['глаз', '10'],
  ];

  let result = reportHeader + '\r\n';
  result += columns.join(',') + '\r\n';
  for (const r of rows) {
    result += r.join(',') + '\r\n';
  }
  return result;
}

module.exports = generateReport;
