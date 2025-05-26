// ECMA Script Modules
import express from 'express';

// Node.js CommonJS modules
// const express = require('express');

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello from a GET endpoint!');
});

app.post('/hello', (req, res) => {
  res.send('Hello ' + req.body.name + ' from a Post endpoint!');
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
