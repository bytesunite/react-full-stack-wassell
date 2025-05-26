// ECMA Script Modules
import express from 'express';

// Node.js CommonJS modules
// const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
