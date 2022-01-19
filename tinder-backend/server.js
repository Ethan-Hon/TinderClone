import express from 'express';
import mongoose from 'mongoose';

//App Config
const app = express();
const port = process.env.PORT || 8080;

//MiddleWares

//DB Configuration

//API Endpoints
app.get("/", (req, res) => res.status(200).send('Hey Guy'))

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))