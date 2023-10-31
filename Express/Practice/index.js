import { config } from 'dotenv';
config();
import express from 'express';
//import bodyParser from 'body-parser';
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// -------------------------------- API ROUTES -------------------------------
import authRoute from './routes/auth.route.js';
import admin from './routes/admin.route.js';

app.use('/auth', cors(), authRoute);

app.use('/admin', cors(), admin)
//app.use('/admin');

// goto /doc to see api documentation
app.get('/', (req, res) => {
  res.send(`hello world`);
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

export { app };
