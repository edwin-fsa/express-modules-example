import express from 'express';
import proces from 'process';

const PORT = process.env.PORT || 4000;
const __dirname = import.meta.dirname

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  const { name } = req.params;

  res.send(`Hello ${name}`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
