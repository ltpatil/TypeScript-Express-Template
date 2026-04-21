import express from 'express';
import pingRouter from './ping.routes';
import readFileRouter from './readFile.routes';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);
v1Router.use('/read',readFileRouter);

export default v1Router;