// ECMA Script Modules
import express from 'express';

// Node.js CommonJS modules
// const express = require('express');

const articleInfo = [
  { name: 'learn-react', upvotes: 0, comments: [] },
  { name: 'mongodb', upvotes: 0, comments: [] },
  { name: 'learn-node', upvotes: 0, comments: [] },
];

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const article = articleInfo.find((a) => a.name === req.params.name);
  article.upvotes += 1;

  res.send(article);
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articleInfo.find((a) => a.name === name);
  article.comments.push({ postedBy, text });

  res.json(article);
});

/*
app.get('/hello', (req, res) => {
  res.send('Hello from a GET endpoint!');
});

// url parameters
app.get('/hello/:name', (req, res) => {
  res.send('Hello ' + req.params.name);
});

// send data with request
app.post('/hello', (req, res) => {
  res.send('Hello ' + req.body.name + ' from a Post endpoint!');
});
*/

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
