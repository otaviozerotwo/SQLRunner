import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './data-source';
const PORT = process.env.NODE_PORT;

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco:', error);
  });
