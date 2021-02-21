import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';
import routes from './routes';

const app = express();

//this is for logging purposes
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../access.log'),
  { flags: 'a' }
);

app.use(helmet());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', routes.user);

app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})

