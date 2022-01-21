import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App Config
// const express = require("express");
// const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
const conn_url = 'mongodb+srv://EthanHon:Schutzstaffel040!@cluster0.zeklp.mongodb.net/tinderdb?retryWrites=true&w=majority';

//MiddleWares
app.use(express.json())
app.use(Cors())

//DB Configuration
mongoose.connect(conn_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//API Endpoints
app.get("/", (req, res) => res.status(200).send('Hey Guy'))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        console.log("1");
        if(err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res)=>{
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})
//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))