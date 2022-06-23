const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Elastic Beanstalk으로 배포된 kwon0507.tistory.com의 test project입니다.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/health', (req, res) => {
  res.status(200).send();
});
