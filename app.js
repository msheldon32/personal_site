const http = require ('http');
const express = require ('express');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'personal_site_fe/build')));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'personal_site_fe/build', 'index.html'));
})

app.listen (port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
