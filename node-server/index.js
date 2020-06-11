require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', (req,res) => {
  res.send('Welcom to JapFlash');
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});