import "reflect-metadata"
import express from 'express';
import './infraestructure/DI/container'
import { userRoutes } from './infraestructure/routes/user.routes';
import bodyParser from "body-parser";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/users',userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


export { app };