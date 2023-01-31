import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = '3000';

app.get('/', (req: Request, res: Response) => {
  res.send('please work god please work!!!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});