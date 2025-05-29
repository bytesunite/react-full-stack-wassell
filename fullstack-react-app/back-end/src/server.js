// ECMA Script Modules
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
// Node.js CommonJS modules
// const express = require('express');

const articleInfo = [
  { name: 'learn-react', upvotes: 0, comments: [] },
  { name: 'mongodb', upvotes: 0, comments: [] },
  { name: 'learn-node', upvotes: 0, comments: [] },
];

const app = express();

app.use(express.json());

let db;

async function connectToDb() {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  db = client.db('full-stack-react-db');
}

app.get('/api/articles/:name', async (req, res) => {
  const { name } = req.params;
  const article = await db.collection('articles').findOne({ name });
  res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  // return object after update
  const updatedArticle = await db.collection('articles').findOneAndUpdate(
    { name },
    {
      $inc: { upvotes: 1 },
    },
    {
      returnDocument: 'after',
    }
  );
  res.json(updatedArticle);
});

app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  // to be updated to use mongodb

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

async function start() {
  await connectToDb();
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
}

start();
