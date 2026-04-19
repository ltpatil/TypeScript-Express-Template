import express from 'express';
import { pingHandler } from '../../controllers/ping.contoller';
import { pingValidator } from '../../validators/ping.validators';
import { pingSchema } from '../../validators/ping.schema';

const pingRouter = express.Router();

pingRouter.get('/',pingValidator(pingSchema), pingHandler);

export default pingRouter;
