const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51GQDYzLLBvOXu5yHBjYlcf3BODhdBVK0AJrzN1aXsctvOKMZQ4CmzZznKOs3QWTcg7jEwKNgJcUwymnAHLo8WFMp00LKEtbFbP")

// API

// - App config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (response, reponse)) => { 
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)
    
    const paymentIntent = await stripe. paymentsIntents.create({
        amount: total,    //subunits of the currency
        currency: "usd",
        
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

}

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint 
// http://localhost:5001/challenge-9cf31/us-central1/api