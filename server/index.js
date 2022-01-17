const express = require('express');
const app = express();
const port = 3000;
const router = require('./router.js');

app.use(express.json());

// *************
// Request Handling
// *************
app.use('/qa', router);

// *************
// Server
// *************
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
  });