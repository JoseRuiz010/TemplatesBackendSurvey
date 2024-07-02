import express from 'express';
import { userRoutes } from './infraestructure/routes/user.routes';

const app = express();

app.use('/users',userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


export { app };