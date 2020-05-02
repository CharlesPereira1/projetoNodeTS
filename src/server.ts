import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello WORD' }));

app.listen(3333, () => {
  console.log('🚀 Server started on port in 3333!');
});
