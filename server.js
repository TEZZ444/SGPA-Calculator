const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(express.static('public'));

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
