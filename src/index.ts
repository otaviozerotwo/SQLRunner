import 'dotenv/config';
import express from 'express';
import { Request, Response } from 'express';
import { AppDataSource } from './data-source';
// const PORT = process.env.NODE_PORT;

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    // app.get('/', (req: Request, res: Response): Promise<void> => {
    //   res.json('deu certo');
      
    // })
  })
