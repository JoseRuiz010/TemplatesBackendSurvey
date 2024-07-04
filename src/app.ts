import "reflect-metadata"
import express from 'express';
import './infraestructure/DI/container'
import { userRoutes } from './infraestructure/routes/user.routes';

const app = express();

app.use('/users',userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


export { app };