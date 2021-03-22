const express = require('express');
const path = require('path')
const app = express();
const port = 3010;

app.use('/', express.static(path.join(__dirname, '../Public')));

app.listen(port, () => {
  console.log('listening on port :', port);
})