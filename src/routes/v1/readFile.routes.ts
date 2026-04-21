import express from 'express';
import { readFileHandler } from '../../controllers/readFile.controller';

const readFileRouter = express.Router();

readFileRouter.get('/',readFileHandler);
export default readFileRouter;