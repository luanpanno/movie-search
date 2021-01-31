import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'hello world ' }));

console.log('backend');

app.listen(3001);
