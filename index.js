const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Next Learner Server Running...');
})

app.listen(port, () => {
  console.log(`Next Learner Server Running on PORT: ${port}`);
})