const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
