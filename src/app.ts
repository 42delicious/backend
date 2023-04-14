import express, { Express, Request, Response } from 'express';
import { init, pool } from './db/pg-pool';

export const app: Express = express();
const port = process.env.PORT;

init().then(() => app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', (_req: Request, res: Response) => {
  const result = pool.query(`SELECT * FROM TEST;`);
  res.send(result);
})