import express from 'express';
import {serverConfig} from './config';
import apirouter from './routes/index.router';
import { AppErrorHandler } from './utils/error.util';
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.use('/api',apirouter);

app.use(AppErrorHandler);
app.listen(serverConfig.PORT, () => {
    console.log(`Example app listening at http://localhost:${serverConfig.PORT}`);
}); 
