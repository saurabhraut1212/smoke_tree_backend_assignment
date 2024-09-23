import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Server started');
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
